const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;
const pg = require("pg");
pg.defaults.ssl = true;
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
app.use(cors());

//cookie-session middlewear
app.use(
  cookieSession({
    name: "session",
    keys: ["secret"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(express.json());

//require and import all routes
const drivewayRoutes = require("./Routes/drivewayRoutes");
app.use("/api/driveways", drivewayRoutes);

const reservationRoutes = require("./Routes/reservationRoutes");
app.use("/api/reservations", reservationRoutes);

const userRoutes = require("./Routes/userRoutes");
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
