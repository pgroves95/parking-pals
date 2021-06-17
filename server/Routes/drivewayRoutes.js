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
    const createDriveway = await Driveways.create(req.body); // still need to add check if host to get host_id and assign host id based on user who is logged in
    res.json(createDriveway);
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updateDriveway = await Driveways.update(
        {description: req.body.description},
        {where: { id: id }}
    )
    res.json(updateDriveway)

})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deleteDriveway = await Driveways.destroy({where: { id: id }
    })
    res.json(deleteDriveway)
})

module.exports = router;