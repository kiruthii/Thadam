import FormHeader from "../../../../ui/formHeader/formHeader";
import FieldColumn from "../../ui/FieldColumn";
import Header from "../../ui/Header";
const CustomerMoreInfo = ({ customer }) => {
  const fieldLeft = [
    { label: "referred by", value: customer?.referredBy },
    {
      label: "Last Contacted",
      value: customer?.logMeeting?.[0]?.date,
      type: "date",
    },
  ];
  const filedRight = [
    {
      label: "Secondary Email",
      value: customer?.secondaryEmail,
      type: "email",
    },
    {
      label: "Secondary Mobile Phone",
      value: customer?.secondaryContactNo,
      type: "phone",
    },
  ];
  return (
    <div className="card h-100 " style={{ backgroundColor: "white" }}>
      <div className="card-body">
        <Header label="More Info" />
        <div className="row ">
          <FieldColumn fields={filedRight} />
          <FieldColumn fields={fieldLeft} />
        </div>
      </div>
    </div>
  );
};
export default CustomerMoreInfo;
