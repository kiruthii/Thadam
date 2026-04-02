const PersonalDetails = ({ register, errors }) => {
  return (
    <>
      <h6 className="section-title text-primary">PERSONAL INFO</h6>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>First Name *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.firstname ? "is-invalid" : ""}`}
            {...register("firstname", { required: "First name is required" })}
          />
          <div className="invalid-feedback">{errors.firstname?.message}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label>Last Name *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.lastname ? "is-invalid" : ""}`}
            {...register("lastname", { required: "Last name is required" })}
          />
          <div className="invalid-feedback">{errors.lastname?.message}</div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;