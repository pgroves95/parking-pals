const bcrypt = require("bcrypt");
const express = require("express");
const db = require("../../models");
const { Users } = require("../../models");

const router = express.Router();

// authenticated login route
router.post("/login", async (req, res) => {
  const userLogin = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (userLogin) {
    const passedAuth = await bcrypt.compare(
      req.body.password,
      userLogin.password
    );
    if (passedAuth) {
      req.session.id = userLogin.id;
      console.log(userLogin)
      res.send(userLogin);
      return;
    }
  }
  res.status(401).send({ message: "Unauthenticated" });
});

//register if email not in use
router.post("/register", async (req, res) => {
  if (await Users.findOne({ where: { email: req.body.email } })) {
    res.send({ message: "email in use" });
    return;
  }

  const {
    first_name,
    last_name,
    email,
    stripe_acct,
    password,
    phone,
    license_plate,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      stripe_customer_id: stripe_acct,
      password: hashedPassword,
      phone: phone,
      license_plate: license_plate,
    });
    console.log(newUser.id, newUser.first_name);
    res.send(newUser);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

//logout sets session to null
router.get("/logout", (req, res) => {
  req.session.id = null;
  res.send("logged out");
});

//find a user in the db by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const userData = await Users.findByPk(id);
  if (userData === null) {
    return res.send("user not found");
  } else {
    return res.json(userData);
  }
});

module.exports = router;
