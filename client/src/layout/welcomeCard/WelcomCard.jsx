import { useEffect, useState } from "react";

const WelcomeCard = () => {
  const [name, setName] = useState("Guest");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h1 className="h3 mb-2">{name}'s Dashboard</h1>
      <p className="text-muted mb-0">Welcome back, {name}</p>
    </div>
  );
};

export default WelcomeCard;