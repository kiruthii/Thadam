// import { useState } from "react";
import FormHeader from "../../../ui/formHeader/formHeader";

// const contactTypes = [
//   "Lead",
//   "Prospect",
//   "Client",
//   "Networking",
//   "Partner",
//   "Referral",
//   "Other",
// ];

const PersonalDetails = ({ register, errors }) => {
  // const [selectedType, setSelectedType] = useState("Prospect");

  // const handleTypeChange = (e) => {
  //   const value = e.target.value;
  //   setSelectedType(value);
  //   setValue("contactType", value);

  //   if (value !== "Other") {
  //     setValue("contactType", value, { shouldValidate: true });
  //   }
  // };
  return (
    <div className="card mb-2 flex-fill">
      <div className="card-body">
        <FormHeader label="Personal Details" />

        <div className="row">
          <div className="col-md-6 mb-2">
            <label className="required">First Name</label>
            <input
              type="text"
              className={`form-control bg-light ${errors.firstname ? "is-invalid" : ""}`}
              {...register("firstname", {
                required: "First Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "First Name is required",
                },
              })}
            />
            <div className="invalid-feedback">{errors.firstname?.message}</div>
          </div>

          <div className="col-md-6 mb-2">
            <label>Last Name</label>
            <input
              type="text"
              className={`form-control bg-light `}
              {...register("lastname")}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-2">
            <label>Email</label>
            <input
              id="email"
              type="email"
              className={`form-control bg-light ${errors.primaryEmail ? "is-invalid" : ""}`}
              {...register("primaryEmail", {
                validate: (value) => {
                  if (!value) return true;

                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return emailRegex.test(value) || "Enter a valid email";
                },
              })}
            />
          </div>

          <div className="col-md-6 mb-2">
            <label>Phone No.</label>
            <input
              type="text"
              maxLength={10}
              inputMode="numeric"
              className={`form-control bg-light ${errors.primaryContactNo ? "is-invalid" : ""}`}
              {...register("primaryContactNo", {
                required: "Phone required",
                pattern: { value: /^[0-9]{10}$/, message: "Must be 10 digits" },
              })}
            />

            {errors.primaryContactNo && (
              <div className="invalid-feedback">
                {errors.primaryContactNo.message}
              </div>
            )}
          </div>
        </div>

        <div className="row">
          {/* <div className="col-md-6 mb-2">
            <label className="form-label">Contact Type</label>

            <input type="hidden" {...register("contactType")} />

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
                onChange={(e) =>
                  setValue("contactType", e.target.value, {
                    shouldValidate: true,
                  })
                }
              />
            )}
          </div> */}

          <div className="col-md-6 mb-2">
            <label>Referred By</label>
            <input
              type="text"
              className="form-control bg-light"
              {...register("referredBy")}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 mb-2">
            <label>Notes</label>
            <textarea
              rows="2"
              className="form-control bg-light"
              {...register("notes")}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
