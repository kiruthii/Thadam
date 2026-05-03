const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.get("/", authController.home);
router.get("/login", authController.login);
router.get("/callback", authController.callback);
router.post("/logout", authController.logout);

module.exports = router;