const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');
const { testimonials } = require('../db');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
});

router.route('/testimonials/random').get((req, res) => {
    res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
});

router.route('/testimonials/:id').get((req, res) => {
    res.json(db.testimonials.filter(db => db.id == req.params.id));
});

router.route('/testimonials').post((req, res) => {
    const { author, text } = req.body;
    const payload = {
        author: author,
        text: text,
        id: uuidv4(),
    };
    db.testimonials.push(payload);
    res.json({ message: 'ok' });
});

router.route('/testimonials/:id').put((req, res) => {
    db.testimonials[req.params.id] = req.body;
    res.json({ message: 'ok' });
});

router.route('/testimonials/:id').delete((req, res) => {
    db.testimonials.filter(testimonials => testimonials.id == req.params.id);
    res.json({ message: 'ok' });
});


module.exports = router;