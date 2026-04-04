const References = ({ register, errors }) => {
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      <h6 className="section-title text-primary">REFERENCES</h6>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Last Contacted Date </label>
          <input
            type="date"
            className={`form-control bg-light ${errors.date ? "is-invalid" : ""}`}
            max={today}
            {...register("date")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Referred By </label>
          <input
            type="text"
            className={`form-control bg-light ${errors.referredBy ? "is-invalid" : ""}`}
            {...register("referredBy")}
          />
        </div>
      </div>
    </>
  );
};

export default References;
