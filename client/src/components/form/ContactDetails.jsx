const ContactDetails = ({ register, errors }) => {
  return (
    <>
      <h6 className="section-title text-primary">CONTACT INFO</h6>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Primary Email </label>
          <input
            type="email"
            className={`form-control bg-light ${errors.primaryEmail ? "is-invalid" : ""}`}
            {...register("primaryEmail")}
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
          

          <label>Primary Phone No.</label>

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
          <div className="invalid-feedback">
            {errors.primaryContactNo?.message}
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <label>Secondary Phone No.</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.secondaryContactNo ? "is-invalid" : ""}`}
            {...register("secondaryContactNo", {
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Must be 10 digits",
              },
            })}
          />
          <div className="invalid-feedback">
            {errors.secondaryContactNo?.message}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
