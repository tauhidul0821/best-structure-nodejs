const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    fatherName: {
        type: String
    },
    motherName: {
        type: String
    },
    group: {
        type: String
    },
    registration: {
        type: Number
    },
    dateOfBarth: {
        type: String
    },
    address: {
        type: String
    },

});

module.exports = mongoose.model('Student', StudentSchema)