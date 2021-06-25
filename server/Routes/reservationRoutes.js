const express = require("express");
const db = require("../../models");
const { convertTime } = require("../convertTime");
const { Reservations, Driveways } = require("../../models");

const router = express.Router();

//route to fetch all reservation reservation
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Reservations.findAll({
      include: [
        {
          model: Driveways,
        },
      ],
      where: { user_id: id },
    });

    res.json(reservation);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

//delete reservation by id
router.delete("/:id", async (req, res) => {
  console.log(req.body.id);
  const res_id = req.body.id;
  try {
    const reservation = await Reservations.findOne({
      where: {
        id: res_id,
      },
    });

    await reservation.destroy();
    res.json({ message: "success" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

//make a new reservation
router.post("/new", async (req, res) => {
  convertedStart = convertTime(req.body.start_req);
  convertedEnd = convertTime(req.body.end_req);

  console.log(req);
  if (!req.body.user_id) {
    console.log("hi");
    res.status(400).json({ message: "this doesnt work" });
  }

  try {
    const reservation = await Reservations.create({
      date: req.body.date,
      driveway_id: req.body.driveway_id,
      end_req: convertedEnd,
      start_req: convertedStart,
      stripe_charge_id: req.body.stripe_charge_id,
      user_id: req.body.user_id,
    });

    res.json(reservation);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;
