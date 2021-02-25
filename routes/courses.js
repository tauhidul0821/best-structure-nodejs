const express = require('express');
const router = express.Router({ mergeParams: true });
const { getCourses } = require('../controllers/courses');

router
  .route('/')
  .get(getCourses);
// .post(createBootcamp);

// router
//   .route('/:id')
//   .get(getBootcamp)
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);

module.exports = router
