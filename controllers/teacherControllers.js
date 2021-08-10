const ErrorResponse = require('../utils/errorResponse');
const Teacher = require('../models/teacherModels.js');

// @desc    Get all teacher
// @route   GET /api/v1/teacher
// @access  Public
exports.getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({ success: true, count: teachers.length, data: teachers });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

// @desc    Get single teacher
// @route   GET /api/v1/teachers/:id
// @access  Public
exports.getTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return next(new ErrorResponse(`Teacher not found with id of ${req.params.id}`, 404));
    }


    res.status(200).json({ success: true, data: teacher });
  } catch (err) {
    next(new ErrorResponse(`Teacher not found with id of ${req.params.id}`, 404))
  }
}

// @desc    Create new teacher
// @route   POST /api/v1/teachers
// @access  Private
exports.createTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json({ success: true, data: teacher });
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc    Update teacher
// @route   PUT /api/v1/teachers/:id
// @access  Private
exports.updateTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!teacher) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: teacher })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc    Delete teacher
// @route   DELETE /api/v1/teachers/:id
// @access  Private
exports.deleteTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id)
    if (!teacher) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

