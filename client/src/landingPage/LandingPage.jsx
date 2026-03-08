 export const LandingPage=()=>{
    const handleLogin = () => {
    window.location.href = "http://localhost:5000/login";
  };
    return(
 <button onClick={handleLogin}>
      Login with WorkOS
    </button>
    )

}
