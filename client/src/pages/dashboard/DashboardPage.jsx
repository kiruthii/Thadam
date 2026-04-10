import { useState } from "react";
import Sidebar from "../../layout/sidebar/Sidebar";
import WelcomeCard from "../../layout/welcomeCard/WelcomCard";
import CustomerTable from "../../components/table/CustomerTable";
import { Logout } from "../../components/logOutHandling/LogoutHandling";

const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-flex vh-100 position-relative">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} handleLogout={Logout} />

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column bg-light overflow-auto">
        {/* Top Bar */}
        <div className="border-bottom bg-white p-2">
          <button
            className="btn btn-outline-secondary d-md-none"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Page Content */}
        <div className="p-4">
          <WelcomeCard />

          <div>
            <CustomerTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;