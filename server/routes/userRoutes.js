const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {getUserDetails, updateProfile } = require("../controllers/userController");
const upload = require("../middleware/upload");
router.get("/me", auth, getUserDetails);
router.put("/profile", auth, upload.single("image"), updateProfile);


module.exports = router;