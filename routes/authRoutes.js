const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/register", protect, authorizeRoles("admin", "hr"), registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
