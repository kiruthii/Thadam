import React from "react";

const LogMeetingInfo = ({ logMeeting, onEdit }) => { 
  if (!logMeeting) return null

  const formattedDate = logMeeting?.date
    ? new Date(logMeeting.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  const getIcon = (type) => {
    switch (type) {
      case "Call": return "📞"
      case "Email": return "📧"
      case "Video": return "🎥"
      case "In-person": return "👤"
      default: return "📌"
    }
  };

  return (
    <div className="d-flex gap-3">
      <div className="d-flex flex-column align-items-center">
        <div style={{
          width: "8px", height: "8px",
          backgroundColor: "#0d6efd",
          borderRadius: "50%", marginTop: "6px",
        }}></div>
      </div>
      <div className="flex-grow-1">
        <div className="text-muted small mb-1">{formattedDate}</div>
        <div className="border rounded p-3 bg-light">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-semibold">
              {getIcon(logMeeting?.meetingType)} {logMeeting?.meetingTitle}
            </div>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={onEdit}
            >
              Edit
            </button>
          </div>

          <div className="text-muted small mt-1">{logMeeting?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default LogMeetingInfo;