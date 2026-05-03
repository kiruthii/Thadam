export const Logout = async () => {
  const VITE_BACKEND_LIVE_BASE_URL = import.meta.env.VITE_BACKEND_LIVE_BASE_URL;
  const token = localStorage.getItem("token") ?? "";

  console.log("Starting logout...");
  console.log("Token:", token ? "Present" : "Missing");
  console.log("Backend URL:", VITE_BACKEND_LIVE_BASE_URL);

  try {
    const res = await fetch(`${VITE_BACKEND_LIVE_BASE_URL}/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Response status:", res.status);
    const data = await res.json();
    console.log("Response data:", data);

    if (data.success) {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      console.log("Logout successful, redirecting...");
      window.location.href = "/login";
    } else {
      console.error("Logout failed:", data.message);
    }
  } catch (error) {
    console.error("Logout error:", error);
  }
};
