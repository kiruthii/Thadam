import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useAddLogMeeting } from "../../services/LogMeeting/useAddLogMeeting";
import { useUpdateLogMeeting } from "../../services/LogMeeting/useUpdateLogMeeting";
import { useDeleteLogMeeting } from "../../services/LogMeeting/useDeleteLogMeeting";

const defaultValues = {
  logMeeting: {
    date: "",
    meetingTitle: "",
    meetingType: "Call",
    description: "",
  },
};

const LogMeetingForm = ({ show, handleClose, customer, editData, setEditData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const today = new Date().toISOString().split("T")[0];

  const { mutate: addMeeting } = useAddLogMeeting();
  const { mutate: updateMeeting } = useUpdateLogMeeting();
  const { mutate: deleteMeeting } = useDeleteLogMeeting();

  useEffect(() => {
    if (show) {
      if (editData) {
        reset({
          logMeeting: {
            date: editData.date ? editData.date.split("T")[0] : "",
            meetingTitle: editData.meetingTitle || "",
            meetingType: editData.meetingType || "Call",
            description: editData.description || "",
          },
        });
      } else {
        reset(defaultValues);
      }
    }
  }, [show, editData, reset]);

  const handleModalClose = () => {
    reset(defaultValues);
    setEditData && setEditData(null);
    handleClose();
  };

  const onSubmit = (data) => {
    const customerId = customer?._id?.toString() || customer?.id?.toString();
    if (!customerId) {
      console.error("No customer ID found");
      return;
    }

    if (editData) {
      updateMeeting(
        { id: customerId, meetingId: editData._id?.toString(), data: data.logMeeting },
        { onSuccess: handleModalClose }
      );
    } else {
      addMeeting(
        { id: customerId, data: data.logMeeting },
        { onSuccess: handleModalClose }
      );
    }
  };

  const handleDelete = () => {
    if (!editData) return;
    const customerId = customer?._id?.toString() || customer?.id?.toString();
    deleteMeeting(
      { id: customerId, meetingId: editData._id?.toString() },
      { onSuccess: handleModalClose }
    );
  };

  return (
    <Modal show={show} onHide={handleModalClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{editData ? "Edit Meeting" : "Log Meeting"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form id="logMeetingForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Date</label>
              <input
                type="date"
                max={today}
                className={`form-control bg-light ${errors.logMeeting?.date ? "is-invalid" : ""}`}
                {...register("logMeeting.date")}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Meeting Title</label>
              <input
                type="text"
                className={`form-control bg-light ${errors.logMeeting?.meetingTitle ? "is-invalid" : ""}`}
                placeholder="Enter meeting title..."
                {...register("logMeeting.meetingTitle")}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Meeting Type</label>
              <select
                className={`form-control bg-light ${errors.logMeeting?.meetingType ? "is-invalid" : ""}`}
                {...register("logMeeting.meetingType")}
              >
                <option value="Call">Call</option>
                <option value="Email">Email</option>
                <option value="Video">Video</option>
                <option value="In-person">In-person</option>
              </select>
            </div>

            <div className="col-md-12 mb-3">
              <label>Description</label>
              <textarea
                rows="3"
                className={`form-control bg-light ${errors.logMeeting?.description ? "is-invalid" : ""}`}
                placeholder="Enter description..."
                {...register("logMeeting.description")}
              ></textarea>
            </div>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        {editData && (
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        )}
        <Button variant="secondary" onClick={handleModalClose}>
          Cancel
        </Button>
        <Button type="submit" form="logMeetingForm" variant="primary">
          {editData ? "Update" : "Save"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogMeetingForm;