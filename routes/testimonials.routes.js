const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');


router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
});

router.route('/testimonials/random').get((req, res) => {
    res.json(uuidv4(db.testimonials.id));
});

router.route('/testimonials/:id').get((req, res) => {
    res.json(db.testimonials.filter(db => db.id == req.params.id));
});

router.route('/testimonials').post((req, res) => {
    const { author, text } = req.body;
    res.json({ message: 'ok' })
});

router.route('/testimonials/:id').put((req, res) => {
    const { author, text } = req.body;
    res.json({ message: 'ok' });
});

router.route('/testimonials/:id').delete((req, res) => {
    res.json({ message: 'ok' });
});


module.exports = router;