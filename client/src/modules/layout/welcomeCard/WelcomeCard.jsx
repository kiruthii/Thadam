import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/userContext/UserContext";
import EditProfileModal from "../../../pages/dashboard/EditProfileModal";

const WelcomeCard = () => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const name = user?.user?.name || "Guest";

  return (
    <>
      <div className="card shadow-sm p-4 mb-4">
        
        
        <div className="d-flex justify-content-between align-items-center">

          
          <div>
            <h1 className="h4 mb-1">{name}'s Dashboard</h1>
            <p className="text-muted mb-0">Welcome back, {name}</p>
          </div>

          
          <div className="position-relative">
            <img
              src={
                user?.user?.profileImage ||
                `https://ui-avatars.com/api/?name=${name}&background=0d6efd&color=fff`
              }
              alt="profile"
              className="rounded-circle border border-2 shadow-sm"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />

            
            <i
              className="fa-solid fa-pen position-absolute"
              style={{
                bottom: 0,
                right: 0,
                background: "#fff",
                borderRadius: "50%",
                padding: "6px",
                fontSize: "12px",
                cursor: "pointer",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              }}
              onClick={() => setShowModal(true)}
            ></i>
          </div>

        </div>
      </div>

     
      {showModal && <EditProfileModal close={() => setShowModal(false)} />}
    </>
  );
};

export default WelcomeCard;