const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');


router.route('/seats').get((req, res) => {
    res.json(db.seats);
});

router.route('/seats/random').get((req, res) => {
    res.json(db.seats[Math.floor(Math.random() * db.seats.length)]);
});

router.route('/seats/:id').get((req, res) => {
    res.json(db.seats.filter(seats => seats.id == req.params.id));
});

router.route('/seats').post((req, res) => {
    const { author, text } = req.body;
    const payload = {
        text: text,
        author: author,
        id: uuidv4(),
    };
    db.seats.push(payload);
    res.json({ message: ' ok' });
});

router.route('/seats/:id').put((req, res) => {
    db.seats[req.params.id] = req.body;
    res.json({ message: 'ok' });
});

router.route('seats/:id').delete((req, res) => {
    db.seats.filter(seats => seats.id == req.params.id);
    res.json({ message: 'ok' });
});

module.exports = router;