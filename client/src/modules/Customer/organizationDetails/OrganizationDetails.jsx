import FormHeader from "../../../ui/formHeader/formHeader";

const OrganizationDetails = ({ register }) => {
  return (
    <div className="card mb-2 flex-fill">
      <div className="card-body">
        <FormHeader label="Organization Details" />
        <div className="mb-2">
          <label>Company</label>
          <input className={`form-control bg-light`} {...register("company")} />
        </div>

        <div className="mb-2">
          <label>Designation</label>
          <input
            className={`form-control bg-light`}
            {...register("designation")}
          />
        </div>

        <div className="mb-2">
          <label>Location</label>
          <input
            className="form-control bg-light"
            {...register("address.street")}
          />
        </div>

        <div className="mb-2">
          <label>Website</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.website")}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetails;
