const express = require("express");
const app = express();
const path = require("path");
const Sequelize = require('sequelize');
const {Users} = require("../models");
app.use(express.json());
const PORT = process.env.PORT || 3001;
const pg = require("pg");
pg.defaults.ssl = true; 
// const CONNECTION_STRING = `postgres://dywitnep:vK4LV14zo8VpAIfDWAzBxZX2wtZ3FUNV@batyr.db.elephantsql.com/dywitnep`;

// const client = new pg.Client(CONNECTION_STRING);
// client.connect(function (err) {
//   if (err) {
//     return console.error("could not connect to postgres", err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function (err, result) {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].theTime);
//   });
// });

app.get("/data", (req, res) => {
  res.json({ message: "AMAZINGGGGGG!!!" });
});

app.get("/users", async (req,res) => {
  data = await Users.findAll()
  res.json(data)
})

app.get("/data/users/:id", (req, res) => {
  const { id } = req.params;
  client.query(
    "SELECT name FROM users WHERE id = $1",
    [id],
    function (err, result) {
      if (err) {
        return console.error("error running query", err);
      }
      res.send(result.rows[0]);

      client.end();
    }
  );
});

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
