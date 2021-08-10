const ErrorResponse = require('../utils/errorResponse');
const Person = require('../models/personModels.js');

// @desc    Get all person
// @route   GET /api/v1/person
// @access  Public
exports.getPersons = async (req, res, next) => {
  try {
    const persons = await Person.find();
    res.status(200).json({ success: true, count: persons.length, data: persons });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

// @desc    Get single person
// @route   GET /api/v1/persons/:id
// @access  Public
exports.getPerson = async (req, res, next) => {
  try {
    const person = await Person.findById(req.params.id);

    if (!person) {
      return next(new ErrorResponse(`Person not found with id of ${req.params.id}`, 404));
    }


    res.status(200).json({ success: true, data: person });
  } catch (err) {
    next(new ErrorResponse(`Person not found with id of ${req.params.id}`, 404))
  }
}

// @desc    Create new person
// @route   POST /api/v1/persons
// @access  Private
exports.createPerson = async (req, res, next) => {
  try {
    const person = await Person.create(req.body);
    res.status(201).json({ success: true, data: person });
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc    Update person
// @route   PUT /api/v1/persons/:id
// @access  Private
exports.updatePerson = async (req, res, next) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!person) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: person })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc    Delete person
// @route   DELETE /api/v1/persons/:id
// @access  Private
exports.deletePerson = async (req, res, next) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id)
    if (!person) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

