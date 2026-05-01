const Customer = require("../models/Customer.js");

const addLogMeeting = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { $push: { logMeeting: req.body } },
      { new: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(updatedCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateLogMeeting = async (req, res) => {
  try {
    const { id, meetingId } = req.params;
    const { date, meetingType, meetingTitle, description } = req.body;

    const updatedCustomer = await Customer.findOneAndUpdate(
      { _id: id, "logMeeting._id": meetingId },
      {
        $set: {
          "logMeeting.$.date": date,
          "logMeeting.$.meetingType": meetingType,
          "logMeeting.$.meetingTitle": meetingTitle,
          "logMeeting.$.description": description,
        },
      },
      { new: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer or meeting not found" });
    }
    res.json(updatedCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteLogMeeting = async (req, res) => {
  try {
    const { id, meetingId } = req.params;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { $pull: { logMeeting: { _id: meetingId } } },
      { new: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(updatedCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addLogMeeting, updateLogMeeting, deleteLogMeeting };