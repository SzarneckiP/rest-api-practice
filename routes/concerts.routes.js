const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');
const { concerts } = require('../db');


router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
});

router.route('/concerts/random').get((req, res) => {
    res.json(db.concerts[Math.floor(Math.random() * db.concerts.length)]);
});

router.route('/concerts/:id').get((req, res) => {
    res.json(db.concerts.filter(concerts => concerts.id == req.params.id));
});

router.route('/concerts').post((req, res) => {
    const { performer, genre, price, day, image } = req.body;
    const payload = {
        id: uuidv4(),
        performer,
        genre,
        price,
        day,
        image,
    };
    db.concerts.push(payload);
    res.json({ message: ' ok' });
});

router.route('/concerts/:id').put((req, res) => {
    const { performer, genre, price, day, image } = req.body;
    const dbConcerts = db.concerts.find(concert => (concert.id == req.params.id));
    dbConcerts.performer = performer;
    dbConcerts.genre = genre;
    dbConcerts.price = price;
    dbConcerts.day = day;
    dbConcerts.image = image;
    res.json({ message: 'ok' });
});

router.route('/concerts/:id').delete((req, res) => {
    db.concerts = db.concerts.filter(concert => (concert.id != req.params.id));
    res.json({ message: 'ok' });
});

module.exports = router;