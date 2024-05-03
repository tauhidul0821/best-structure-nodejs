
const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  
    name: {
       type: String
    },
age: {
       type: Number
    },
cgpa: {
       type: Number
    },
   
});

module.exports = mongoose.model('Person', PersonSchema)
