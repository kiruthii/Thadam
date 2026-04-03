import { useEffect, useContext } from "react";
import { messageContext } from "../../context/WelcomeMessageContext";
import CustomerTable from "../../components/table/CustomerTable";

const WelcomeMessage = () => {
  const name = localStorage.getItem("name") ?? "Guest";
  const { setWelcomeMessage } = useContext(messageContext);

  useEffect(() => {
    setWelcomeMessage(`Welcome back, ${name}`);
  }, []);

  return (
    <>
      <div className="card shadow-sm p-4 mb-4">
        <h1 className="h3 mb-2">{name}'s Dashboard</h1>
        <p className="text-muted mb-0">Welcome back, {name}</p>
      </div>

      <div>
        <CustomerTable />
      </div>
    </>
  );
};

export default WelcomeMessage;
