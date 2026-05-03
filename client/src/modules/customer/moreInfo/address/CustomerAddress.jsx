import FieldColumn from "../../ui/FieldColumn";
import Header from "../../ui/Header";
const CustomerAddress = ({ address }) => {
  const fieldLeft = [
    { label: "Street", value: address?.street || "Detail not found"},
    { label: "City", value: address?.city },
    { label: "State", value: address?.state },
  ];
  const fieldRight=[
    { label: "Country", value: address?.country },
    { label: "Post Code", value: address?.postCode },]
  return (
    <div className="card h-100" style={{ backgroundColor: "white"}}>
      <div className="card-body">
        <div className="card-title">
          <Header label="Address"/>
              <div className="row ">
              <FieldColumn fields={fieldLeft}/> 
              <FieldColumn fields={fieldRight}/>
              </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerAddress;
