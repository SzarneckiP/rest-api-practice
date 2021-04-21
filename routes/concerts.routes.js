const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');


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
    const { author, text } = req.body;
    const payload = {
        text: text,
        author: author,
        id: uuidv4(),
    };
    db.concerts.push(payload);
    res.json({ message: ' ok' });
});

router.route('/concerts/:id').put((req, res) => {
    db.concerts[req.params.id] = req.body;
    res.json({ message: 'ok' });
});

router.route('concerts/:id').delete((req, res) => {
    db.concerts.filter(concerts => concerts.id == req.params.id);
    res.json({ message: 'ok' });
});

module.exports = router;