const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');
const { seats } = require('../db');


router.route('/seats').get((req, res) => {
    res.json(db.seats);
});

router.route('/seats/random').get((req, res) => {
    res.json(db.seats[Math.floor(Math.random() * db.seats.length)]);
});

router.route('/seats/:id').get((req, res) => {
    res.json(db.seats.find(seats => seats.id == req.params.id));
});

router.route('/seats').post((req, res) => {
    const { day, seat, client, email } = req.body;
    const payload = {
        id: uuidv4(),
        day: day,
        seat: seat,
        client: client,
        email: email,
    };
    db.seats.push(payload);
    res.json({ message: ' ok' });
});

router.route('/seats/:id').put((req, res) => {
    const { day, seat, client, email } = req.body;
    const dbSeats = db.seats.find(seat => (seat.id == req.params.id));
    dbSeats.day = day;
    dbSeats.seat = seat;
    dbSeats.client = client;
    dbSeats.email = email;
    res.json({ message: 'ok' });
});

router.route('/seats/:id').delete((req, res) => {
    db.seats = db.seats.filter(seat => (seat.id != req.params.id));
    res.json({ message: 'ok' });
});

module.exports = router;