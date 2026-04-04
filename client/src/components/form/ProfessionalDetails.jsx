import { useState } from "react";

const contactTypes = [
  "Lead",
  "Prospect",
  "Client",
  "Networking",
  "Partner",
  "Referral",
  "Other",
];

const ProfessionalDetails = ({ register, errors, setValue }) => {
  const [selectedType, setSelectedType] = useState("Prospect");

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);
    setValue("contactType", value);

    if (value !== "Other") {
      setValue("contactType", value, { shouldValidate: true });
    }
  };

  return (
    <>
      <div className="mb-3">
        <label className="form-label">Company :</label>
        <input
          type="text"
          className={`form-control bg-light ${errors.company ? "is-invalid" : ""}`}
          {...register("company")}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Contact Type :</label>

        <input
          type="hidden"
          {...register("contactType", {
            required: "Contact Type is required",
          })}
        />

        <select
          className={`form-select bg-light ${errors.contactType ? "is-invalid" : ""}`}
          onChange={handleTypeChange}
          value={selectedType}
        >
          {contactTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        {selectedType === "Other" && (
          <input
            type="text"
            placeholder="Enter custom type"
            className="form-control mt-2"
            {...register("contactType", {
              required: "Contact Type is required",
            })}
          />
        )}

        {errors.contactType && (
          <div className="invalid-feedback">{errors.contactType.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Designation:</label>
        <input
          type="text"
          className={`form-control bg-light ${errors.designation ? "is-invalid" : ""}`}
          {...register("designation", {
            required: "Designation is required",
          })}
        />
      </div>
    </>
  );
};

export default ProfessionalDetails;
