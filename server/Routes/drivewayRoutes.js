const express = require("express");

const { Driveways } = require("../../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const drivewaysData = await Driveways.findAll();
    res.send(drivewaysData);
  } catch(err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const createDriveway = await Driveways.create(req.body);
    res.json(createDriveway);
  } catch(err) {
    console.log(err);
  }
});

// not available client side
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateDriveway = await Driveways.update(
    { description: req.body.description },
    { where: { id: id } }
  );
    res.json(updateDriveway);
  } catch(err) {
    console.log(err);
  }
});

//not available client side
router.delete("/:id", async (req, res) => {
  try {  
    const id = req.params.id;
    const deleteDriveway = await Driveways.destroy({ where: { id: id } });
    res.json(deleteDriveway);
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;
