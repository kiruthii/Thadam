import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomerTableContext } from "../../context/CustomerTableContext";
import { gooeyToast } from "goey-toast";

import {
  ContactDetails,
  LocationDetails,
  PersonalDetails,
  ProfessionalDetails,
  References,
  Socials,
} from "../../components";

const AddCustomerPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [tab, setTab] = useState("quick");

  const navigate = useNavigate();
  const location = useLocation();
  const customer = location.state;

  const { addCustomer, updateCustomer } = useContext(CustomerTableContext);

  useEffect(() => {
    if (customer) {
      reset({
        ...customer,
        lastContactedDate: customer.lastContactedDate
          ? customer.lastContactedDate.split("T")[0]
          : "",
      });
    }
  }, [customer, reset]);

  const onSubmit = (data) => {
    if (data.fullname) {
      const [firstname, lastname] = data.fullname.split(" ");
      data.firstname = firstname;
      data.lastname = lastname || "";
    }

    if (customer) {
      updateCustomer.mutate(
        { id: customer._id, data },
        {
          onSuccess: () => {
            gooeyToast.success("Customer updated successfully");
            setTimeout(() => {
              navigate("/");
            }, 1500);
          },
          onError: () => {
            gooeyToast.error("Update failed");
          },
        },
      );
    } else {
      addCustomer.mutate(data, {
        onSuccess: () => {
          gooeyToast.success("Customer added successfully");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        },
        onError: () => {
          gooeyToast.error("Add failed");
        },
      });
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow" style={{ width: "589px", height: "541px" }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Add Contact</h5>
          <button className="btn-close" onClick={() => navigate("/")}></button>
        </div>

        <div className="d-flex gap-2 p-3">
          <button
            type="button"
            className={`btn w-50 ${
              tab === "quick" ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => setTab("quick")}
          >
            ⚡ Quick Add
          </button>

          <button
            type="button"
            className={`btn w-50 ${
              tab === "full" ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => setTab("full")}
          >
            📄 Full Details
          </button>
        </div>

        <form
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          className="card-body overflow-auto mt-3"
        >
          {tab === "quick" && (
            <>
              <h6 className="text-primary border-bottom pb-2 mb-3">
                ESSENTIAL INFO
              </h6>

              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  className="form-control"
                  {...register("firstname", { required: true })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  className="form-control"
                  {...register("lastname", { required: true })}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    {...register("primaryEmail")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone</label>
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
                  <div className="invalid-feedback">{errors.primaryContactNo?.message}</div>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Designation</label>
                  <input
                    className="form-control"
                    {...register("designation")}
                  />
                </div>
              </div>
            </>
          )}

          {tab === "full" && (
            <>
              <PersonalDetails register={register} errors={errors} />
              <ContactDetails register={register} errors={errors} />
              <ProfessionalDetails register={register} errors={errors} />
              <LocationDetails register={register} errors={errors} />
              <References register={register} errors={errors} />
              <Socials register={register} />
            </>
          )}
        </form>

        <div className="card-footer d-flex justify-content-end gap-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="btn btn-outline-secondary"
          >
            Cancel
          </button>

          <button
            type="submit"
            form="form"
            className="btn btn-primary"
            disabled={addCustomer.isPending || updateCustomer.isPending}
          >
            {addCustomer.isPending || updateCustomer.isPending
              ? "Saving..."
              : "Save Contact"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerPage;
