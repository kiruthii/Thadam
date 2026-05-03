import FormHeader from "../../../../ui/formHeader/formHeader";

const Address = ({ register, errors }) => {
  return (
    <>
      <FormHeader label="Address" />

      <div className="row">
        <div className="col-12 mb-2">
          <label className="address.label">Street</label>
          <input
            type="text"
            className="form-control bg-light"
            {...register("address.street")}
          />
        </div>

        <div className="col-md-6 mb-2">
          <label className="address.label">City </label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.city ? "is-invalid" : ""}`}
            {...register("address.city")}
          />
        </div>

        <div className="col-md-6 mb-2">
          <label className="address.label">State </label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.state ? "is-invalid" : ""}`}
            {...register("address.state")}
          />
        </div>

        <div className="col-md-6 mb-2">
          <label className="address.label">Country </label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.country ? "is-invalid" : ""}`}
            {...register("address.country")}
          />
        </div>

        <div className="col-md-6 mb-2">
          <label className="address.label">Postcode </label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.postCode ? "is-invalid" : ""}`}
            {...register("address.postCode")}
          />
        </div>
      </div>
    </>
  );
};

export default Address;
