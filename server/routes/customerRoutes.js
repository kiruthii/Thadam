const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const verifyToken = require("../middleware/authMiddleware");

const {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerFilter,
} = require("../controllers/customerController");

router.get("/customers/filters", verifyToken, getCustomerFilter)
router.get("/customers", verifyToken, getAllCustomers);
router.delete("/customers/:id", verifyToken, deleteCustomer);
router.get("/customers/:id", verifyToken, getCustomerById);
router.put("/customers/:id", verifyToken, updateCustomer);
router.post("/customers", verifyToken, addCustomer);
module.exports = router;
