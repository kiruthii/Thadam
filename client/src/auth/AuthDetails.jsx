import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", searchParams.get("accessToken"));
    localStorage.setItem("name", searchParams.get("name"));
    
    navigate("/");
  }, []);


  return <div></div>;
};

export default AuthDetailsPage;
