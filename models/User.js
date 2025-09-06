const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["employee", "admin"], default: "employee" },
    leaveBalance: {
      CL: { type: Number, default: 12 },
      PL: { type: Number, default: 3 },
      SL: { type: Number, default: 5 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
