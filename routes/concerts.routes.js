const express = require('express');
const router = express.Router();

const concertController = require('../controllers/concerts.controller');

router.route('/concerts').get(concertController.getAll);

router.route('/concerts/random').get(concertController.getRandom);

router.route('/concerts/:id').get(concertController.getById);

router.route('/concerts').post(concertController.post);

router.route('/concerts/:id').put(concertController.update);

router.route('/concerts/:id').delete(concertController.delete);

module.exports = router;