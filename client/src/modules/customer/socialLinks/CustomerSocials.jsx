import FieldRender from "../../actions/fieldRender/FieldRender";
import Header from "../ui/Header";
const CustomerSocials = ({ customer }) => {
  const fields = [
    { label: "Facebook", value: customer?.socialMedia?.facebook },
    { label: "Twitter", value: customer?.socialMedia?.twitter },
    { label: "Instagram", value: customer?.socialMedia?.instagram },
    {label:"linkedIn",value:customer?.socialMedia?.linkedin}
  ];
  return (
    <div className="card h-100 p-3" >
    <Header label="Socials"/>
      <div className="d-flex gap-3">
        {fields
          .filter((field) => field.value)
          .map((field) => (
            <FieldRender
              key={field.label}
              type="link"
              value={field.value}
            />
          ))}
      </div>
    </div>
  );
};
export default CustomerSocials;