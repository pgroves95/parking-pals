const express = require("express");
const app = express();
const path = require("path");
const Sequelize = require("sequelize");
const { Users } = require("../models");
const Router = express.Router();
const PORT = process.env.PORT || 3001;
const pg = require("pg");
pg.defaults.ssl = true;

app.use(express.json());
app.use()

// // import and user routes
// const userRouter = require("./userRoutes");
// app.use("/api/users", userRouter);


// // userRoutes.js
// const router = express();

// router.get("/", async (req, res) => {
//   const data = await Users.findAll();
//   res.json(data);
// });

// module.exports = userRouter;
// // end userRouter.js


app.get("/data", (req, res) => {
  res.json({ message: "AMAZINGGGGGG!!!" });
});

app.get("/users", async (req,res) => {
  const data = await Users.findAll()
  res.json(data)
})


// app.get("/data/users/:id", (req, res) => {
//   const { id } = req.params;
//   client.query(
//     "SELECT name FROM users WHERE id = $1",
//     [id],
//     function (err, result) {
//       if (err) {
//         return console.error("error running query", err);
//       }
//       res.send(result.rows[0]);

//       client.end();
//     }
//   );
// });

// app.post("/data/adduser/", (req,res) => {
//   const {name, email, stripe_acct,password,phone,access,date_created,license_plate} = req.body.newUser
//   client.query('INSERT INTO users(name, email,stripe_acct,password,phone,access,date_created,license_plate) VALUES($1, $2, $3, $4, $5, $6, $7,$8'), [name, email, stripe_acct,password,phone,access,date_created,license_plate], function(err,result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     // What are we going to be sending to react? success????
//     // res.send()
//     client.end();
//   }
//

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
