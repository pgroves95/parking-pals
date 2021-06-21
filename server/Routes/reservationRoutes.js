
const express = require("express");
const db = require("../../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { id } = req.session;
    const reservationsData = await db.Reservations.findAll({
      where: { user_id: id },
    });
    res.json(reservationsData);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const reservation = await db.Reservations.findOne({
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

router.delete("/:id", async (req, res) => {
  try {
    const reservation = await db.Reservations.findOne({
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

router.post("/", async (req, res) => {
  try {
    const reservation = await db.Reservations.create({
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
