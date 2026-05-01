const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

const {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerFilter,
} = require("../controllers/customerController");

const {
  addLogMeeting,
  updateLogMeeting,
  deleteLogMeeting,
} = require("../controllers/logMeetingController");


router.get("/customers/filters", verifyToken, getCustomerFilter);
router.get("/customers", verifyToken, getAllCustomers);
router.post("/customers", verifyToken, addCustomer);
router.get("/customers/:id", verifyToken, getCustomerById);
router.put("/customers/:id", verifyToken, updateCustomer);
router.delete("/customers/:id", verifyToken, deleteCustomer);

router.post("/customers/:id/log-meeting", verifyToken, addLogMeeting);
router.put("/customers/:id/log-meeting/:meetingId", verifyToken, updateLogMeeting);
router.delete("/customers/:id/log-meeting/:meetingId", verifyToken, deleteLogMeeting);

module.exports = router;