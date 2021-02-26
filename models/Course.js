const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a course title']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  weeks: {
    type: String,
    required: [true, 'Please add a weeks']
  },
  tuition: {
    type: Number,
    required: [true, 'Please add a tuition cost']
  },
  minimumSkill: {
    type: String,
    required: [true, 'Please add a minimum skill'],
    enum: ['beginner', 'intermediate', 'advanced']
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bootcamp',
    required: true
  }
});

// Static method to get avg of course tuitions
CourseSchema.static.getAverageCost = async function (bootcampId) {
  console.log('Calculating avg cost ...'.blue);

  const obj = await this.aggregate([
    {
      $match: { bootcamp: bootcampId }
    },
    {
      $group: {
        _id: '$bootcamp',
        averageCost: { $avg: '$tuition' }
      }
    }
  ])

  console.log(obj);

}


// Call getAverageCost after save
CourseSchema.post('save', function () {
  this.constructor.getAverageCost(this.bootcamp);
});

// Call getAverageCost after remove
CourseSchema.pre('remove', function () {
  this.constructor.getAverageCost(this.bootcamp);
});



module.exports = mongoose.model('Course', CourseSchema)