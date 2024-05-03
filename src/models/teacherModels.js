
const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  
    name: {
       type: String
    },
age: {
       type: Number
    },
certificate: {
       type: String
    },
address: {
       type: String
    },
   
});

module.exports = mongoose.model('Teacher', TeacherSchema)
