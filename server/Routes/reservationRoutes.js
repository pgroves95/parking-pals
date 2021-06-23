const express = require("express");
const db = require("../../models");
const { Reservations } = require("../../models");

const router = express.Router();

//route to get all reservations for authorized user
router.get("/", async (req, res) => {
  try {
    const { id } = req.session;
    const reservationsData = await Reservations.findAll({
      where: { user_id: id },
    });
    res.json(reservationsData);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

//route to ferch a single reservation
router.get("/:id", async (req, res) => {
  try {
    const reservation = await Reservations.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.id,
      },
    });

    res.json(reservation);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

//delete reservation by id
router.delete("/:id", async (req, res) => {
  try {
    const reservation = await Reservations.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.id,
      },
    });

    await reservation.destroy();
    res.json({ message: "success" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

//make a new reservation
router.post("/", async (req, res) => {
  try {
    const reservation = await Reservations.create({
      date: req.body.date,
      driveway_id: req.body.driveway_id,
      end_req: req.body.end_request,
      start_req: req.body.start_request,
      stripe_charge_id: req.body.stripe_charge_id,
      user_id: req.session.id,
    });

    res.json(reservation);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;
