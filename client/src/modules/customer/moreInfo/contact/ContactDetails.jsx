import FormHeader from "../../../../ui/formHeader/formHeader";

const ContactDetails = ({ register, errors }) => {
  return (
    <>
      <FormHeader label="Contact Details" />

      <div className="mb-2">
        <label>Secondary Email</label>
        <input
          type="email"
          className="form-control bg-light"
          {...register("secondaryEmail")}
        />
      </div>

      <div className="mb-2">
        <label>Secondary Phone No.</label>
        <input
          type="text"
          maxLength={10}
          inputMode="numeric"
          className={`form-control bg-light ${errors.secondaryContactNo ? "is-invalid" : ""}`}
          {...register("secondaryContactNo", {
            required: "Phone required",
            pattern: { value: /^[0-9]{10}$/, message: "Must be 10 digits" },
          })}
        />

        {errors.secondaryContactNo && (
          <div className="invalid-feedback">
            {errors.secondaryContactNo.message}
          </div>
        )}
      </div>
    </>
  );
};

export default ContactDetails;
