const express = require("express");
const {
  addLogMeeting,
  updateLogMeeting,
  deleteLogMeeting,
} = require("../controllers/logMeetingController.js");

const router = express.Router();

router.post("/:id/log-meeting", addLogMeeting);
router.put("/:id/log-meeting/:meetingId", updateLogMeeting);
router.delete("/:id/log-meeting/:meetingId", deleteLogMeeting);

module.exports = router;