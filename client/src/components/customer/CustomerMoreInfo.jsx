import FieldRender from "../fieldRender/FieldRender";

const CustomerMoreInfo = ({ customer }) => {
  const fieldLeft = [
    // { label: "First Name", value: customer.firstname },
    // { label: "Primary Email", value: customer.primaryEmail },
    // { label: "Mobile Phone", value: customer.primaryContactNo },
    // { label: "Company Name", value: customer.company },
    { label: "Facebook", value: customer.socialMedia?.facebook, type: "link" },
    { label: "Twitter", value: customer.socialMedia?.twitter, type: "link" },
    {
      label: "Instagram",
      value: customer.socialMedia?.instagram,
      type: "link",
    },
  ];
  const filedRight = [
    // { label: "Last Name", value: customer.lastname },
    { label: "Secondary Email", value: customer.secondaryEmail, type: "email" },
    {
      label: "Secondary Mobile Phone",
      value: customer.secondaryContactNo,
      type: "email",
    },
    // { label: "Designation", value: customer.designation },
    // { label: "LinkedIn", value: customer.socialMedia?.linkedin || "-"},
    // { label: "Instagram", value: customer.socialMedia?.instagram || "-"},
  ];
  return (
    <div className="card h-100 " style={{ backgroundColor: "white" }}>
      <div className="card-body">
        <h5 className="card-title mb-3" style={{ color: "#2563eb" }}>
          More Info
        </h5>
        <div className="row ">
          <div className="col">
            {filedRight.map((field) => (
              <div className="row p-2" key={field.label}>
                <h6 className="col-5 ">{field.label} :</h6>
                <p className="col-7">
                  <FieldRender type={field.type} value={field.value} />
                </p>
              </div>
            ))}
          </div>
          <div className="col">
            {fieldLeft.map((field) => (
              <div className="row p-2" key={field.label}>
                <h6 className="col-5">{field.label} :</h6>
                <p className="col-7">
                  <FieldRender type={field.type} value={field.value} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerMoreInfo;
