const LocationDetails = ({ register, errors }) => {
  return (
    <>
      <h6 className="section-title primary-text">ADDRESS</h6>

      <div className="row">
        <div className="col-12 mb-3">
          <label>Street</label>
          <input
            type="text"
            className="form-control bg-light"
            {...register("address.street")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>City *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.city ? "is-invalid" : ""}`}
            {...register("address.city", { required: "Required" })}
          />
          <div className="invalid-feedback">{errors.address?.city?.message}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label>State *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.state ? "is-invalid" : ""}`}
            {...register("address.state", { required: "Required" })}
          />
          <div className="invalid-feedback">{errors.address?.state?.message}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label>Country *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.country ? "is-invalid" : ""}`}
            {...register("address.country", { required: "Required" })}
          />
          <div className="invalid-feedback">{errors.address?.country?.message}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label>Postcode *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.postCode ? "is-invalid" : ""}`}
            {...register("address.postCode", { required: "Required" })}
          />
          <div className="invalid-feedback">{errors.address?.postCode?.message}</div>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;