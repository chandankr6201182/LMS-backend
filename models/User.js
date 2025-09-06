const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "hr", "manager", "employee"],
      default: "employee",
    },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    joiningDate: { type: Date, required: true },
    employeeId: { type: String, unique: true },
    status: {
      type: String,
      enum: ["active", "inactive", "terminated"],
      default: "active",
    },
    phone: { type: String },
    address: { type: String },
    profileImage: { type: String, default: "" },
    leaveBalance: {
      casual: { type: Number, default: 12 },
      sick: { type: Number, default: 10 },
      earned: { type: Number, default: 15 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
