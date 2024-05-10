const { fork} = require('child_process');
const ErrorResponse = require('../utils/errorResponse');
const Student = require('../models/studentModels');

// @desc    Get all students
// @route   GET /api/v1/students
// @access  Public
exports.getPrimeNumber = async (req, res, next) => {
    try {
        const num = req.params.id;
        // console.log('num:-', num);
        const child = fork('./src/controllers/child.js')

        child.send(num);

        child.on('message', (message)=>{
            // console.log(message);
            // res.json(message);
            res.status(200).json({ success: true, data: message });
        });

        child.on('exit', (code) => {
            console.log('child exited with a code of', code);
        });

        // res.json();

        // const result = is_prime(num)
        // console.log('result', result);
        // res.json(result);

        // const students = await Student.find();
        // res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}

