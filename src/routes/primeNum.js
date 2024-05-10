const express = require('express');
const router = express.Router();
const { getPrimeNumber } = require('../controllers/primeNum');


router.get('/:id', getPrimeNumber);

module.exports = router




