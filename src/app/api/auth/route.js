import axios from "axios";
import { NextResponse } from "next/server";
import https from "https";
import DBconnect from "@/lib/config";
import User from "@/models/user";

export async function POST(req) {
  try {
    // connect db
    await DBconnect();

    // parse body
    const data = await req.json();
    const { scholernumber, password } = data;

    // validation
    if (!scholernumber || !password) {
      return NextResponse.json(
        { message: "Scholar Number and Password are required" },
        { status: 400 }
      );
    }

    // allow self-signed SSL
    const agent = new https.Agent({ rejectUnauthorized: false });

    // ERP API request
    const res = await axios.post(
      "https://erpapi.manit.ac.in/api/login",
      { username: scholernumber, password },
      {
        httpsAgent: agent,
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.data) {
      return NextResponse.json(
        console.log("Login failed"),
        { error: "ERP login failed" },
        { status: 401 }
      );
    }

    // check if already registered
    const existsUser = await User.findOne({ scholernumber });
    if (existsUser) {
      return NextResponse.json(
        { error: "Scholar Number Already Registered" },
        { status: 409 }
      );
    }

    // save new user
    const saveUser = new User(data);
    await saveUser.save();

    return NextResponse.json(
      { message: "User registered successfully", user: saveUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in register API:", error.message);

    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
