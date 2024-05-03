const mongoose = require('mongoose');
const slugify = require('slugify');

const BootCampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters']
  },
  slug: String,
  description: {
    type: String,
    maxlength: [500, 'description can not be more than 500 characters']
  },
  website: {
    type: String
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number can not be longer than 20 characters']
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'
    ]
  },
  address: {
    type: String,
    required: [true, 'Please add an address']

  },
  // location:{
  //   // GeoJSON point
  //   type:{
  //     type: String,
  //     enum: ['Point'],
  //     required: true
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true,
  //     index: '2dsphere'
  //   },
  //   formattedAddress: String,
  //   street: String,
  //   city: String,
  //   state: String,
  //   zipcode: String,
  //   country: String

  // },
  careers: {
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other',
    ]
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating must can not be more than 10']
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  housing: {
    type: Boolean,
    default: false
  },
  jobAssistance: {
    type: Boolean,
    default: false
  },
  jobGuarantee: {
    type: Boolean,
    default: false
  },
  acceptGi: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create bootcamp slug from the name 
BootCampSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
})


// Cascade delete courses when a bootcamp is deleted
BootCampSchema.pre('remove', async function (next) {
  await this.model('Course').deleteMany({ bootcamp: this._id })
  next();
});

// Reverse populate with virtuals
BootCampSchema.virtual('courses', {
  ref: 'Course',
  localField: '_id',
  foreignField: 'bootcamp',
  justOne: false
});


module.exports = mongoose.model('Bootcamp', BootCampSchema)