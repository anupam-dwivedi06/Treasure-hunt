import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    teamname: String,
    scholernumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    branch: String,
    teammembername: String,
    memberscnumber: String,
    memberbranch: String,
  },
  { timestamps: true }
);

// ✅ Fix: Reuse existing model if already compiled
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
