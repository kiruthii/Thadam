import { useState } from "react";
import Address from "../address/Address";
import ContactDetails from "../contact/ContactDetails";
import Updates from "../updates/Updates";

const MoreInformation = ({ register, errors, customer }) => {
  const [activeTab, setActiveTab] = useState("address");

  return (
    <div>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeTab === "address" ? "active" : ""}`}
            onClick={() => setActiveTab("address")}
          >
            Address
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </li>

        { customer == null && <li className="nav-item"> 
          <button
            type="button"
            className={`nav-link ${activeTab === "updates" ? "active" : ""}`}
            onClick={() => setActiveTab("updates")} 
          >
            Updates
          </button>
        </li>}
      </ul>
      <div className="p-3 border">
        {activeTab === "address" && (
          <Address register={register} errors={errors} />
        )}
        {activeTab === "contact" && (
          <ContactDetails register={register} errors={errors} />
        )}
        {activeTab === "updates" && (
          <Updates register={register} errors={errors} />
        )}
      </div>
    </div>
  );
};

export default MoreInformation;
