//need to add express session

const express = require("express");

const {Users} = require("../../models");

const router = express.Router();

// needs bcrypt
router.post("/adduser", async (req,res) => {
    const {
        first_name,
        last_name,
        email,
        stripe_acct,
        password,
        phone,
        access,
        license_plate
    } = req.body.newUser

const user = await Users.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    stripe_acct: stripe_acct,
    password: password,
    phone: phone,
    access: access,
    license_plate: license_plate
})
console.log(user.id, user.firstName)
})
// replace with req.session.id
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const userData = await Users.findByPk(id)
    if(userData === null){
        return res.send("user not found")
    } else {
        return res.json(userData)
    }
})

// /updateuser (PUT) route needs:
// * conditionals for grabbing form-fields (if changed, update, else (aka "") don't)
// * if driveway added for driver-user, update access and profile-view routing on
// front-end to "both"
// * if license_plate added for host-user, update access and profile
// to "both"
// * can the "both" type user undo driveway or license_plate and become single-access user?
// * 

module.exports = router

