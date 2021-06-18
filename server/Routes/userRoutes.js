//need to add express session

const bcrypt = require("bcrypt");
const express = require("express");
const db = require("../../models");

const { Users } = require("../../models");

const router = express.Router();

// needs bcrypt
router.post("/login", async (req, res) => {
	const userLogin = await Users.findOne({
		where: {
			email: req.body.email,
		},
	});
	console.log(req.body.password, userLogin);
	if (userLogin) {
		const passedAuth = await bcrypt.compare(
			req.body.password,
			userLogin.password
		);
		if (passedAuth) {
			req.session.id = userLogin.id;
			res.send(userLogin);
			return;
		}
	}
	res.status(401).send({ message: "Unauthenticated" });
});

router.post("/register", async (req, res) => {
	if (await Users.findOne({ email: req.body.email })) {
		res.send({ message: "email in use" });
	}

	console.log(req.body);
	const {
		first_name,
		last_name,
		email,
		stripe_acct,
		password,
		phone,
		license_plate,
	} = req.body;

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
	res.send(newUser);
	console.log(user.id, user.first_name);
});

// replace with req.session.id
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	const userData = await Users.findByPk(id);
	if (userData === null) {
		return res.send("user not found");
	} else {
		return res.json(userData);
	}
});
router.get("/", async (req, res) => {
	req.session.id === null;
	res.send("logged out");
});

// /updateuser (PUT) route needs:
// * conditionals for grabbing form-fields (if changed, update, else (aka "") don't)
// * if driveway added for driver-user, update access and profile-view routing on
// front-end to "both"
// * if license_plate added for host-user, update access and profile
// to "both"
// * can the "both" type user undo driveway or license_plate and become single-access user?
// *

module.exports = router;
