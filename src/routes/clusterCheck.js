const express = require('express');
const router = express.Router();
const { getClusterCheck } = require('../controllers/clusterCheck');


router.get('/check', getClusterCheck);


module.exports = router




