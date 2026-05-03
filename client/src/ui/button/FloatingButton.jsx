import { useNavigate } from "react-router-dom";

const FloatingButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/add-contact-form");
  };

  return (
    <button
      onClick={handleNavigate}
      className="btn btn-primary position-fixed bottom-0 end-0 mb-4 me-5 d-flex align-items-center justify-content-center shadow"
      style={{
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        zIndex: 1000,
      }}
    >
      <i className="fa-solid fa-plus fs-5"></i>
    </button>
  );
};

export default FloatingButton;