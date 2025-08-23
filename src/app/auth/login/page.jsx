"use client"
import React, { useState } from "react";
import Image from "next/image";
import bgImage from "@/assets/treasure-bg.jpg";
import location from "@/assets/location.png";

const Login = () => {
  const [formdata, setformdata] = useState({
    teamname: "",
    scholernumber: "",
    password: "",
    branch: "",
    teammembername: "",
    memberscnumber: "",
    memberbranch: "",
  });

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex relative">
      <Image
        src={bgImage}
        alt="bgImage"
        className="w-[100vw] h-[100vh] object-cover"
      />

      <div className="flex absolute justify-center items-center w-screen h-screen p-4">
        <form
          action="submit"
          className="w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[35vw] h-[85vh] overflow-auto no-scrollbar bg-[#271F19] flex flex-col items-center py-6 px-6 rounded-xl space-y-4"
        >
          {/* Logo Circle */}
          <div className="w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12 rounded-full bg-yellow-500 flex justify-center items-center">
            <Image
              src={location}
              alt="location"
              className="invert sepia saturate-200 hue-rotate-180 w-8 sm:w-6 md:w-5"
            />
          </div>

          {/* Heading and para */}
          <div className="flex flex-col text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-yellow-500 font-bold">
              Treasure Quest
            </h1>
            <p className="text-white px-2 text-xs sm:text-sm md:text-base">
              Enter your credentials to begin the ultimate treasure hunt
              adventure
            </p>
          </div>

          {/* Inputs */}
          <div className="flex flex-col text-white w-full space-y-3">
            <label className="flex flex-col text-yellow-500 font-semibold text-sm sm:text-base">
              Team Name
              <input
                type="text"
                name="teamname"
                value={formdata.teamname}
                onChange={handlechange}
                placeholder="Enter your Team Name"
                required
                className="p-2 rounded text-yellow-200 border border-yellow-600 text-sm sm:text-base"
              />
            </label>

            <label className="flex flex-col text-yellow-500 font-semibold text-sm sm:text-base">
              Scholar Number
              <input
                type="number"
                name="scholernumber"
                value={formdata.scholernumber}
                onChange={handlechange}
                placeholder="Enter your Scholar Number"
                required
                className="p-2 rounded text-yellow-200 border border-yellow-600 text-sm sm:text-base"
              />
            </label>

            <label className="flex flex-col text-yellow-500 font-semibold text-sm sm:text-base">
              Password
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handlechange}
                placeholder="Password"
                required
                className="p-2 rounded text-yellow-200 border border-yellow-600 text-sm sm:text-base"
              />
            </label>

            <label className="flex flex-col text-yellow-500 font-semibold text-sm sm:text-base">
              Branch
              <select
                name="branch"
                value={formdata.branch}
                onChange={handlechange}
                required
                className="p-2 rounded text-yellow-200 border border-yellow-600 text-sm sm:text-base"
              >
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="MDS">MDS</option>
                <option value="ECE">ECE</option>
                <option value="EE">EE</option>
                <option value="Mech">Mech</option>
                <option value="Chemical">Chemical</option>
                <option value="Civil">Civil</option>
                <option value="Meta">Meta</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label className="flex flex-col text-yellow-500 font-semibold text-sm sm:text-base">
              Teammate Name
              <input
                type="text"
                name="teammembername"
                value={formdata.teammembername}
                onChange={handlechange}
                placeholder="Enter Teammate Name"
                required
                className="p-2 rounded text-yellow-200 border border-yellow-600 text-sm sm:text-base"
              />
            </label>

            <label className="flex flex-col text-yellow-500 font-semibold text-sm sm:text-base">
              Teammate Scholar Number
              <input
                type="number"
                name="memberscnumber"
                value={formdata.memberscnumber}
                onChange={handlechange}
                placeholder="Enter Teammate Scholar Number"
                required
                className="p-2 rounded text-yellow-200 border border-yellow-600 text-sm sm:text-base"
              />
            </label>

            <label className="flex flex-col text-yellow-500 font-semibold text-sm sm:text-base">
              Teammate Branch
              <select
                name="memberbranch"
                value={formdata.memberbranch}
                onChange={handlechange}
                required
                className="p-2 rounded text-yellow-200 border border-yellow-600 text-sm sm:text-base"
              >
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="MDS">MDS</option>
                <option value="ECE">ECE</option>
                <option value="EE">EE</option>
                <option value="Mech">Mech</option>
                <option value="Chemical">Chemical</option>
                <option value="Civil">Civil</option>
                <option value="Meta">Meta</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
