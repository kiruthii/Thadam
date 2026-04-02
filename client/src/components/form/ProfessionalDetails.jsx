const roles = ["Lead", "Prospect", "Client", "Partner"];

const ProfessionalDetails = ({ register, errors }) => {
  return (
    <>
      <h6 className="section-title primary-text">PROFESSIONAL INFO</h6>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Role *</label>
          <select
            className={`form-select bg-light ${errors.role ? "is-invalid" : ""}`}
            {...register("role", { required: "Role required" })}
          >
            {roles.map((role, i) => (
              <option key={i}>{role}</option>
            ))}
          </select>
          <div className="invalid-feedback">{errors.role?.message}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label>Designation *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.designation ? "is-invalid" : ""}`}
            {...register("designation", { required: "Required" })}
          />
          <div className="invalid-feedback">{errors.designation?.message}</div>
        </div>

        <div className="col-12 mb-3">
          <label>Company *</label>
          <input
            type="text"
            className={`form-control bg-light ${errors.company ? "is-invalid" : ""}`}
            {...register("company", { required: "Required" })}
          />
          <div className="invalid-feedback">{errors.company?.message}</div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalDetails;