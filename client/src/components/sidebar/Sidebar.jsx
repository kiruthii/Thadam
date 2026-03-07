import "./Sidebar.css";
import thadam from "../../assets/thadamLogo.svg";

const Sidebar = ({ open }) => {
  return (
    <div className={`sidebar ${open ? "active" : ""}`}>
      <div>
        <img className="logo" src={thadam} alt="logo" />
      </div>

      <nav className="menu">
        <p>Dashboard</p>
      </nav>

      <div className="logout">
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
