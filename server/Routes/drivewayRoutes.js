const express = require("express");

const { Driveways } = require("../../models");

const router = express.Router();


//client side use to fetch all driveways from db.
router.get("/", async (req, res) => {
  const drivewaysData = await Driveways.findAll()
  res.send(drivewaysData);
});


//not available client side dev use for test/seeding data
router.post("/", async (req, res) => {
  const createDriveway = await Driveways.create(req.body); 
  res.json(createDriveway);
});

// not available client side dev use for postman
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateDriveway = await Driveways.update(
    { description: req.body.description },
    { where: { id: id } }
  );
    res.json(updateDriveway);
  } catch(e) {
    res.status(400).json({ message: e.message })
  }
});

//not available client side dev use
router.delete("/:id", async (req, res) => {
  try {  
    const id = req.params.id;
    const deleteDriveway = await Driveways.destroy({ where: { id: id } });
    res.json(deleteDriveway);
  } catch(e) {
    res.status(400).json({ message: e.message })
  }
});

module.exports = router;
