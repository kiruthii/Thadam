import { useState } from "react";
import Sidebar from "../../modules/layout/sidebar/Sidebar"
import WelcomeCard from "../../modules/layout/welcomeCard/WelcomeCard"
import { Logout } from "../../modules/actions/handleLogout/Logout";
import ClientTableColumns from "../../modules/clients/clientTableColumns/ClientTableColumns";
// import CustomerTableColumns from "../../modules/customers/customerTableColumns/CustomerTableColumns";
// import CustomerTable from "../../modules/customers/customersTable/CustomerTable";


const ClientDashboardPage= () => {
  const [open, setOpen] = useState(false);
  console.log("rendering")

  return (
    <div className="d-flex vh-100 position-relative">
     
      <Sidebar open={open} setOpen={setOpen} handleLogout={Logout} />

      
      <div className="flex-grow-1 d-flex flex-column bg-light overflow-auto">
       
        <div className="border-bottom bg-white p-2">
          <button
            className="btn btn-outline-secondary d-md-none"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        
        <div className="p-4">
          <WelcomeCard />

          <div>
          <ClientTableColumns/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardPage;