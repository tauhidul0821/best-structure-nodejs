const { Worker, workerData, parentPort } = require('worker_threads');
const ErrorResponse = require('../utils/errorResponse');
const THREAD_COUNT = 4;

function createWorker() {
    return new Promise((resolve, reject) =>{
        const worker = new Worker('./src/controllers/four-workers.js', {
            workerData: { thread_count: THREAD_COUNT }
        });

        worker.on('message', (data) => {
            resolve(data);
        });
        worker.on('error',(error) => {
            reject(error);
        });

    })
}

// @desc    Get Cluster Api
// @route   GET /api/v1/worker/blocking
// @access  Public
//
exports.blockingWorker = async (req, res) => {
        const workerPromises = [];
        for(let i = 0; i< THREAD_COUNT; i++){
            workerPromises.push(createWorker());
        }
        const thread_results = await Promise.all(workerPromises);

        const counter = thread_results[0] +thread_results[1] +thread_results[2] +thread_results[3];

        res.status(200).json({ success: true, data: `Result is ${counter}` });
}


// @desc    Without Worker: Take longer time
// @route   GET /api/v1/worker/without-worker-blocking
// @access  Public
exports.withOutWorkerBlocking = async (req, res) => {
    try {
        let counter = 0;
        for(let i =0; i< 20_000_000_000; i++){
            counter++;
        }

        res.status(200).json({ success: true, data: `Result is ${counter}` });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}

// @desc    Get Cluster Api
// @route   GET /api/v1/worker/non-blocking
// @access  Public
//
exports.nonBlockingWorker = async (req, res, next) => {
    try {
        res.status(200).json({ success: true, data: `This page is non-blocking api` });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}
