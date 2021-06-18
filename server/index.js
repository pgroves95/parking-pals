const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;
const pg = require("pg");
pg.defaults.ssl = true;
const cookieSession = require("cookie-session");
const cors = require("cors");
const bcrypt = require("bcrypt");
app.use(cors());

app.use(
  cookieSession({
    name: "session",
    keys: ["secret"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(express.json());

const drivewayRoutes = require("./Routes/drivewayRoutes");
app.use(express.json());
app.use("/api/driveways", drivewayRoutes);

// // import and user routes
const userRoutes = require("./Routes/userRoutes");
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
