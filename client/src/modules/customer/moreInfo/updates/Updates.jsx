import FormHeader from "../../../../ui/formHeader/formHeader";
// Fields are always registered under "logMeeting.*"
// so AddCustomer.jsx can reliably extract: const { logMeeting, ...customerData } = data
const Updates = ({ register, errors }) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <FormHeader label="Log Meeting" />

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Date</label>
          <input
            type="date"
            className={`form-control bg-light ${errors?.logMeeting?.date ? "is-invalid" : ""}`}
            max={today}
            {...register("logMeeting.date")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <FormHeader label="Meeting Title"/>
          <input
            type="text"
            className={`form-control bg-light ${errors?.logMeeting?.meetingTitle ? "is-invalid" : ""}`}
            placeholder="Enter meeting title..."
            {...register("logMeeting.meetingTitle")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Meeting Type</label>
          <select
            className={`form-control bg-light ${errors?.logMeeting?.meetingType ? "is-invalid" : ""}`}
            {...register("logMeeting.meetingType")}
          >
            <option value="">-- Select Type --</option>
            <option value="Call">Call</option>
            <option value="Email">Email</option>
            <option value="Video">Video</option>
            <option value="In-person">In-person</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label>Description</label>
          <textarea
            className={`form-control bg-light ${errors?.logMeeting?.description ? "is-invalid" : ""}`}
            rows="3"
            placeholder="Enter description..."
            {...register("logMeeting.description")}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Updates;