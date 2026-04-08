import FormHeader from "../../../../ui/formHeader/formHeader";

const Updates = ({ register, errors }) => {
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      <FormHeader label="Updates" />

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
      </div>
    </>
  );
};

export default Updates;
