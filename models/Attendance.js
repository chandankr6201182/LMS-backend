const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    shiftStart: { type: Date },
    shiftEnd: { type: Date },
    duration: { type: Number }, // in minutes
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendance", attendanceSchema);
