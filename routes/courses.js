const express = require('express');
const router = express.Router({ mergeParams: true });
const { getCourses, getCourse, addCourse } = require('../controllers/courses');

router
  .route('/')
  .get(getCourses)
  .post(addCourse);

router
  .route('/:id')
  .get(getCourse);
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);

module.exports = router
