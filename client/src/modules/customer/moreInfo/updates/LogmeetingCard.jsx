import React, { useContext, useState } from "react";
import LogMeetingInfo from "../../../../ui/Organisms/LogMeetingInfo";
import LogMeetingForm from "../../../../ui/Organisms/LogMeetingForm";
import Header from "../../ui/Header";
import { CustomerContext } from "../../../../contexts/customerContext/CustomerContext";

const LogmeetingCard = () => {
  // Read directly from context so list auto-updates after add/edit/delete
  const { customer } = useContext(CustomerContext);

  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleClose = () => {
    setShow(false);
    setEditData(null);
  };

  const handleEdit = (item) => {
    // Normalize _id to a plain string immediately when setting editData
    // This prevents MongoDB ObjectId objects from breaking the URL later
    const normalized = {
      ...item,
      _id: item._id?.toString(),
    };
    setEditData(normalized);
    setShow(true);
  };

  return (
    <div className="card h-100 p-3 mt-2" style={{ backgroundColor: "white" }}>
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">  
          <Header label="Meeting History" className="mb-0" />  
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            setEditData(null);
            setShow(true);
          }}
        >
          + Log Meeting
        </button>
      </div>

      <LogMeetingForm
        show={show}
        handleClose={handleClose}
        customer={customer}
        editData={editData}
        setEditData={setEditData}
      />

      <div className="d-flex flex-column gap-3">
        {Array.isArray(customer?.logMeeting) && customer.logMeeting.length > 0 ? (
          [...customer.logMeeting]
            .reverse()
            .map((item) => (
              <LogMeetingInfo
                key={item._id?.toString()}
                logMeeting={item}
                onEdit={() => handleEdit(item)}
              />
            ))
        ) : (
          <p className="text-muted text-center py-3">No meetings logged yet.</p>
        )}
      </div>
    </div>
  );
};

export default LogmeetingCard;