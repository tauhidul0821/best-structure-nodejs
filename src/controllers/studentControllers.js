const ErrorResponse = require('../utils/errorResponse');
const Student = require('../models/studentModels');

// @desc    Get all students
// @route   GET /api/v1/students
// @access  Public
exports.getStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json({ success: true, count: students.length, data: students });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}

// @desc    Get single student
// @route   GET /api/v1/students/:id
// @access  Public
exports.getStudent = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return next(new ErrorResponse(`Student not found with id of ${req.params.id}`, 404));
        }

        // Calculate age based on the birth date
        const currentDate = new Date();
        const birthDate = new Date(student.dateOfBarth);
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        const obj = {
            _id: student._id,
            name: student.name,
            fatherName: student.fatherName,
            motherName: student.motherName,
            group: student.group,
            registration: student.registration,
            dateOfBarth: student.dateOfBarth,
            address: student.address,
            age
        }

        res.status(200).json({ success: true, data: obj});
    } catch (err) {
        next(new ErrorResponse(`Student not found with id of ${req.params.id}`, 404))
    }
}

// @desc    Create new student
// @route   POST /api/v1/students
// @access  Private
exports.createStudent = async (req, res, next) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json({ success: true, data: student });
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

// @desc    Update Student
// @route   PUT /api/v1/students/:id
// @access  Private
exports.updateStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!student) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: student })
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

// @desc    Delete Student
// @route   DELETE /api/v1/students/:id
// @access  Private
exports.deleteStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id)
        if (!student) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

