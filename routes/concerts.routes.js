const express = require('express');
const router = express.Router();

const concertController = require('../controllers/concerts.controller');

router.route('/concerts').get(concertController.getAll);

router.route('/concerts/random').get(concertController.getRandom);

router.route('/concerts/:id').get(concertController.getById);

router.route('/concerts').post(concertController.post);

router.route('/concerts/:id').put(concertController.update);

router.route('/concerts/:id').delete(concertController.delete);

router.route('/concerts/performer/:performer').get(concertController.getPerformer);

router.route('/concerts/genre/:genre').get(concertController.getGenre);

router.route('/concerts/day/:day').get(concertController.getDay);

router.route('/concerts/price/:priceMax/:priceMin').get(concertController.getPrice);


module.exports = router;