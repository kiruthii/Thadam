import { useContext, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { messageContext } from "../context/WelcomeMessageContext";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const { welcomePageContent } = useContext(messageContext);
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <div className="layout">
      <Sidebar open={open} />

      {open && <div className="overlay" onClick={closeSidebar}></div>}

      <div className="mainContent">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="pageContent">{welcomePageContent ?? <h2>Welcome to Dashboard</h2>}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
