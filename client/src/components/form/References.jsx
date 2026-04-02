const References = ({ register, errors }) => {
  return (
    <>
      <h6 className="section-title primary-text">REFERENCES</h6>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Last Contacted Date *</label>
          <input
            type="date"
            className={`form-control bg-light ${errors.lastContactedDate ? "is-invalid" : ""}`}
            {...register("lastContactedDate", { required: "Required" })}
          />
          <div className="invalid-feedback">{errors.lastContactedDate?.message}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label>Referred By *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.referredBy ? "is-invalid" : ""}`}
            {...register("referredBy", { required: "Required" })}
          />
          <div className="invalid-feedback">{errors.referredBy?.message}</div>
        </div>
      </div>
    </>
  );
};

export default References;