const express = require('express');
const router = express.Router();
const { nonBlockingWorker, blockingWorker, withOutWorkerBlocking } = require('../controllers/worker');


router.get('/non-blocking', nonBlockingWorker);
router.get('/blocking', blockingWorker);
router.get('/without-worker-blocking', withOutWorkerBlocking);


module.exports = router




