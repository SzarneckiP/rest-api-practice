const express = require('express');
const router = express.Router();

const seatsController = require('../controllers/seats.controller');

router.route('/seats').get(seatsController.getAll);

router.route('/seats/random').get(seatsController.getRandom);

router.route('/seats/:id').get(seatsController.getById);

router.route('/seats').post(seatsController.post);

router.route('/seats/:id').put(seatsController.update);

router.route('/seats/:id').delete(seatsController.delete);

module.exports = router;