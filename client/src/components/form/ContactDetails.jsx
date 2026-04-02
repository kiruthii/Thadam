const ContactDetails = ({ register, errors }) => {
  return (
    <>
      <h6 className="section-title primary-text">CONTACT INFO</h6>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Primary Email *</label>
          <input
            type="email"
            className={`form-control bg-light ${errors.primaryEmail ? "is-invalid" : ""}`}
            {...register("primaryEmail", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter valid email",
              },
            })}
          />
          <div className="invalid-feedback">{errors.primaryEmail?.message}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label>Secondary Email</label>
          <input
            type="email"
            className="form-control bg-light"
            {...register("secondaryEmail")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Primary Phone *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.primaryContactNo ? "is-invalid" : ""}`}
            {...register("primaryContactNo", {
              required: "Phone required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Must be 10 digits",
              },
            })}
          />
          <div className="invalid-feedback">{errors.primaryContactNo?.message}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label>Secondary Phone</label>
          <input
            type="text"
            className="form-control bg-light"
            {...register("secondaryContactNo")}
          />
        </div>
      </div>
    </>
  );
};

export default ContactDetails;