import thadam from "../../assets/thadamLogo.svg";
import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";
import "./Sidebar.css";

const Sidebar = ({ open, setOpen, handleLogout }) => {
  return (
    <>
      <div
        className={`bg-white border-end p-3 d-flex flex-column sidebar-style ${
          open ? "sidebar-open" : ""
        }`}
      >
        <div className="text-center mb-4">
          <img
            src={thadam}
            alt="logo"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
        </div>

        <nav className="nav flex-column flex-grow-1">
          <NavLink
            to="/"
            className="nav-link bg-primary-subtle text-primary rounded mb-2"
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="mt-auto pt-3 border-top">
          <Button
            className="btn btn-outline-danger w-100"
            onClick={handleLogout}
            buttonText="Logout"
          />
        </div>
      </div>

      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 d-md-none"
          style={{ zIndex: 1040 }}
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;