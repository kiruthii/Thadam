import { useEffect, useContext } from "react";
import { messageContext } from "../../context/WelcomeMessageContext";
import "./WelcomeMessage.css";

const WelcomeMessage = () => {
  const { setWelcomePageContent } = useContext(messageContext);

  useEffect(() => {
    setWelcomePageContent(
      <div className="welcomeMessage">
        <h1>Admin Dashboard</h1>
        <p>Welcome back, Admin </p>
      </div>,
    );
  }, []);

  return null;
};

export default WelcomeMessage;
