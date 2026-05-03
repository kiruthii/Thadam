// import logo from "../../assets/thadamLogo.svg";
import noProfile from "../../../assets/noprofile.jpg";
import FieldRender from "../../actions/fieldRender/FieldRender";
const CustomerHeader = ({ customer }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            {/* <img
              src={logo}
              alt="logo"
              style={{
                position: "absolute",
                top: "10px",
                left: "20px",
                width: "110px",
              }}
            /> */}
            <img
              className="rounded-circle mt-1 m-3"
              width="110"
              height="110"
              src={customer?.profilePic || noProfile}
              alt="profilepicture"
            />
          </div>
          <div>
            <h3>
              {customer?.firstname} {customer?.lastname}
            </h3>
            <p>
              {customer?.designation} at {customer?.company}
            </p>
          </div>
        </div>
      </div>

      <div className="col d-flex justify-content-center align-items-center ">
        <div>
          <p>
            <i className="bi bi-envelope-open-fill pe-2" st></i>
            <FieldRender style={{color:"white"}} type="email" value={customer?.primaryEmail} />
          </p>
          <p>
            <i className="bi bi-telephone-fill pe-2"></i>
            <FieldRender style={{color:"white"}} type="phone" value={customer?.primaryContactNo} />
          </p>
          {/* <p>
            <i className="bi bi-linkedin pe-2"></i>
            <FieldRender type="link" value={customer.socialMedia?.linkedin} />
          </p> */}
        </div>
      </div>
    </div>
  );
};
export default CustomerHeader;
