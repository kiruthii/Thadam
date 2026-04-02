
import thadam from "../../assets/thadamLogo.svg";
import Button from "../../components/button/Button";
const VITE_BACKEND_LIVE_BASE_URL = import.meta.env.VITE_BACKEND_LIVE_BASE_URL;
const LandingPage = () => {
  const handleLogin = () => {
    window.location.href = `${VITE_BACKEND_LIVE_BASE_URL}/login`;
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="card shadow-lg p-4 text-center"
        style={{ width: "350px" }}
      >
        <img
          src={thadam}
          alt="logo"
          className="mb-3 mx-auto"
          style={{ width: "120px" }}
        />

        <p className="text-muted mb-4">
          Manage and track your customer details efficiently in one place.
        </p>

        <Button
          className="btn btn-primary btn-lg w-100"
          onClick={handleLogin}
          buttonText="Get Started"
        />
      </div>
    </div>
  );
};
export default LandingPage;
