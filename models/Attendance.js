const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true, default: Date.now },
    shiftStart: { type: Date },
    shiftEnd: { type: Date },
    status: {
      type: String,
      enum: ["present", "absent", "half-day"],
      default: "present",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendance", attendanceSchema);
