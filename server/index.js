const config = require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;
const pg = require("pg");
pg.defaults.ssl = true;
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
app.use(cors({ origin: (orig, cb) => cb(null, true), credentials: true }));

if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

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
