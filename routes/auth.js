const express = require('express');
const router = express.Router();
const { register,login } = require('../controllers/auth');


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
router.post('/login', login)

module.exports = router
