const { WorkOS } = require("@workos-inc/node");
const User = require("../models/user");

const workos = new WorkOS(process.env.WORKOS_API_KEY);

exports.home = (req, res) => {
  res.send("Server Started");
};


exports.login = (req, res) => {
  const authorizationUrl = workos.userManagement.getAuthorizationUrl({
    clientId: process.env.WORKOS_CLIENT_ID,
    redirectUri: process.env.WORKOS_REDIRECT_URI,
    provider: "authkit",
  });

  res.redirect(authorizationUrl);
};


exports.callback = async (req, res) => {
  const { code } = req.query;
  console.log("Code received:", code);

  try {
    const { user, accessToken, refreshToken } =
      await workos.userManagement.authenticateWithCode({
        clientId: process.env.WORKOS_CLIENT_ID,
        code,
      });

    console.log("WorkOS user:", user);

 
    const workosId = user?.id;
    const email = user?.email;
    const name = user?.firstName || user.name || "Guest";
    const image = user?.profilePictureUrl || "";

   
    let existingUser = await User.findOne({ workosId });

    if (!existingUser) {
      existingUser = await User.create({
        workosId,
        email,
        name,
        profileImage: image,
      });
    }

  
    const redirectBaseUrl =
      process.env.NODE_ENV === "development"
        ? process.env.FRONTEND_LOCAL_BASE_URL
        : process.env.FRONTEND_LIVE_BASE_URL;

   
    const redirectUri = `${redirectBaseUrl}?accessToken=${accessToken}&name=${name}&image=${image}`;

    res.redirect(redirectUri);
  } catch (error) {
    console.error("Authentication failed:", error);
    res.status(500).send("Authentication failed");
  }
};


exports.logout = async (req, res) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token missing",
      });
    }

    const accessToken = token.replace("Bearer ", "").trim();

   
    const payload = JSON.parse(
      Buffer.from(accessToken.split(".")[1], "base64").toString()
    );

    const sessionId = payload.sid;

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        message: "Invalid session",
      });
    }

   
    await workos.userManagement.revokeSession({ sessionId });

    res.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);

    res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};