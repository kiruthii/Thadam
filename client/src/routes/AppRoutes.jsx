import { Routes, Route } from "react-router-dom";
import AuthDetailsPage from "../auth/AuthDetails";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LandingPage from "../pages/landing/LandingPage";
import AddCustomerPage from "../pages/customer/addCustomer/AddCustomer";
import CustomerInfoPage from "../pages/customer/customerDetail/CustomerInfoPage";
import { CustomerProvider } from "../contexts/customerContext/CustomerContext";
import ClientDashboardPage from "../pages/dashboard/clientDashboardPage";
import ContactDashboardPage from "../pages/dashboard/ContactDashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LandingPage />} />
      <Route path="/customer/:id" element={<CustomerProvider><CustomerInfoPage /></CustomerProvider>} />
      <Route path="/auth/details" element={<AuthDetailsPage />} />
      <Route path="/" element={<DashboardPage />}></Route>
      <Route path="/contact" element={<ContactDashboardPage />} />
      <Route path="/clients" element={<ClientDashboardPage />} />
     <Route path="/add-contact-form" element={<AddCustomerPage />} />
    </Routes>
  );
};

export default AppRoutes;
