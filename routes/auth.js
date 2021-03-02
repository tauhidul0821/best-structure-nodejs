const express = require('express');
const router = express.Router();
const { register } = require('../controllers/auth');


// router
//   .route('/')
//   .get(getBootcamps)
//   .post(createBootcamp);

// router
//   .route('/:id')
//   .get(getBootcamp)
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);

router.post('/register', register)

module.exports = router
