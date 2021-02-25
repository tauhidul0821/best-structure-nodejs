const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')
const asyncHandler = require('./middleware/async');

// Load env vars 
dotenv.config({ path: './config/config.env' });

// Load models
const Bootcamp = require('./models/Bootcamp');
const Course = require('./models/Course');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`,'utf-8'));
const courses = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`,'utf-8'));

// Import into DB
const importData = asyncHandler(async () => {
  await Bootcamp.create(bootcamps);
  await Course.create(courses);
  console.log('Data Imported...'.green.inverse);
  process.exit();
});

// Delete data
const deleteData = asyncHandler(async () => {
  await Bootcamp.deleteMany();
  await Course.deleteMany();
  console.log('Data Destroyed...'.red.inverse);
  process.exit();
});

if (process.argv[2] === '-i') {
  importData();

} else if (process.argv[2] === '-d') {
  deleteData();

}

/**
 * how to importData or deleteData
 *  node seeder -d [for delete]
 *  node seeder -i [for import]
 */
