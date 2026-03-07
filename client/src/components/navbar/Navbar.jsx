import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Navbar;
