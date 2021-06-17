const express = require("express");

const {Driveways} = require("../../models");

const router = express.Router();

router.get("/", async (req, res) => {
    const drivewaysData = await Driveways.findAll();
    res.send(drivewaysData);
});

router.post("/", async (req, res) => {
    // const createDriveways = await Driveways.create({
        // total_spaces: req.body.total_spaces,
        // open_spaces: req.body.open_spaces,
        // address: req.body.address,
        // description: req.body.description,
        // rate: req.body.rate,
        // host_id: req.body.host_id   
    // });

    const driveway = await Driveways.create(req.body); // still need to add check if host to get host_id and assign host id based on user who is logged in
    res.json(driveway);
});

router.put("/:hostId", async (req, res) => {
    const updateDriveway = await Driveways.update({
        description: req.body.description,
    })
    res.json(updateDriveway)

})

router.delete("/:drivewayId", async (req, res) => {
    const deleteDriveway = await Driveways.destroy()
})

module.exports = router;