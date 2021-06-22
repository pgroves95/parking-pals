const express = require("express");

const { Driveways } = require("../../models");

const router = express.Router();

router.get("/", async (req, res) => {
  const drivewaysData = await Driveways.findAll()
  res.send(drivewaysData);
});

router.post("/", async (req, res) => {
  // const {
  //   is_open,
  //   address,
  //   description,
  //   rate,
  //   lat_long
  // } = req.body
  // const converted_LL = lat_long.split(',')
  // for(let string in converted_LL){
  //   string = parseFloat(string)
  // }
  // console.log(converted_LL)
  // const createDriveway = await Driveways.create({
  //   is_open,
  //   address,
  //   description,
  //   rate,
  //   converted_LL
  // }); // still need to add check if host to get host_id and assign host id based on user who is logged in
  console.log(req.body)
  const createDriveway = await Driveways.create(req.body)
  
  res.json(createDriveway);
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
  } catch(e) {
    res.status(400).json({ message: e.message })
  }
});

//not available client side
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
