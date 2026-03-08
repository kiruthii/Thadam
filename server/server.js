require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { WorkOS } = require("@workos-inc/node");

const app = express();

app.use(cors());
app.use(express.json());

const workos = new WorkOS(process.env.WORKOS_API_KEY);


app.get("/", (req, res) => {
  res.send("Server Started");
});


app.get("/login", (req, res) => {
  const authorizationUrl = workos.userManagement.getAuthorizationUrl({
    clientId: process.env.WORKOS_CLIENT_ID,
    redirectUri: process.env.WORKOS_REDIRECT_URI,
    provider: "authkit",
  });

  res.redirect(authorizationUrl);
});


app.get("/callback", async (req, res) => {
  const { code } = req.query;

  try {
    const { user } = await workos.userManagement.authenticateWithCode({
      clientId: process.env.WORKOS_CLIENT_ID,
      code,
    });

    console.log("WorkOS user object:", user);

    
    const name =
      user.first_name ||
      user.firstName ||
      user.name ||
      user.email ||
      "User";

    res.send(`Welcome ${name}`);

  } catch (error) {
    console.error("Authentication failed:", error);
    res.status(500).send("Authentication failed");
  }
});
app.get("/logout", (req, res) => {
  const logoutUrl = `https://api.workos.com/logout?client_id=${process.env.WORKOS_CLIENT_ID}&return_to=http://localhost:5173`;

  res.redirect(logoutUrl);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});