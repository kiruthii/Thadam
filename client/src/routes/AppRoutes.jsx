import { Routes, Route } from "react-router-dom";
import AuthDetailsPage from "../auth/AuthDetails";
import AuthGuard from "../components/authGuard/AuthGuard";

import {
  AddCustomerPage,
  CustomerInfoPage,
  DashboardPage,
  LandingPage,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LandingPage />} />

      <Route path="/customer/:id" element={<CustomerInfoPage />} />
      <Route path="/auth/details" element={<AuthDetailsPage />} />

      <Route
        path="/"
        element={
          <AuthGuard>
            <DashboardPage />
          </AuthGuard>
        }
      >
      
      </Route>
      <Route
        path="/add-customer-form"
        element={
          <AuthGuard>
            <AddCustomerPage />
          </AuthGuard>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
