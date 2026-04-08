import { useForm } from "react-hook-form";
import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomerTableContext } from "../../context/CustomerTableContext";
import { gooeyToast } from "goey-toast";

import PersonalDetails from "../../modules/Customer/PersonalDetails/PersonalDetails";
import Organization from "../../modules/Customer/organizationDetails/OrganizationDetails";
import SocialLinks from "../../modules/Customer/SocialLinks/SocialLinks";
import MoreInfo from "../../modules/Customer/moreInfo/MoreInfo";
import Button from "../../ui/button/Button";
const AddCustomerPage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

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
    console.log("FORM DATA:", data);
    if (data.fullname) {
      const [firstname, lastname] = data.fullname.split(" ");
      data.firstname = firstname;
      data.lastname = lastname || "";
    }

    if (data.primaryContactNo) {
      data.primaryContactNo = data.primaryContactNo.replace(/\s/g, "");
    }

    if (customer) {
      updateCustomer(
        { id: customer._id, data },
        {
          onSuccess: () => {
            gooeyToast.success("Customer updated successfully");
            setTimeout(() => navigate("/"), 1500);
          },
          onError: (error) => {
            const message = error?.response?.data?.message || "Update failed";
            gooeyToast.error(message);
          },
        },
      );
    } else {
      addCustomer(data, {
        onSuccess: () => {
          gooeyToast.success("Customer added successfully");
          setTimeout(() => navigate("/"), 1500);
        },
        onError: (error) => {
          const message = error?.response?.data?.message || "Add failed";
          gooeyToast.error(message);
        },
      });
    }
  };

  return (
    <div
      className="container-fluid px-3"
      style={{ backgroundColor: "#eef2ff"}}
    >
      <div className="p-3 d-flex align-items-center justify-content-between">
        <Button
          buttonText="Back"
          type="button"
          className="btn btn-outline-secondary"
          icon={<i className="fa-solid fa-arrow-left me-2"></i>}
          onClick={() => navigate("/")}
        />

        <h5 className="m-0 contact-page text-center flex-grow-1">
          {customer ? "Edit Contact" : "Add Contact"}
        </h5>
      </div>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row align-items-stretch p-3">
          <div className="col-md-7 d-flex">
            <PersonalDetails
              register={register}
              errors={errors}
              setValue={setValue}
            />
          </div>
          <div className="col-md-5 d-flex">
            <Organization register={register} errors={errors} />
          </div>
        </div>

        <div className="row p-3">
          <div className="col-md-7">
            <MoreInfo register={register} errors={errors} />
          </div>
          <div className="col-md-5">
            <SocialLinks register={register} control={control} />
          </div>
        </div>
      </form>

      <div className="d-flex justify-content-center gap-2 p-3">
        <Button
          buttonText="Cancel"
          type="button"
          onClick={() => navigate("/")}
          className="btn btn-outline-secondary"
        />

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
  );
};

export default AddCustomerPage;
