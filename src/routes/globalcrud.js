const express = require('express');
const router = express.Router();
const { getAll,getById,create,updateById,deleteById } = require('../controllers/globalcrud');


router
  .route('/')
  .get(getAll)
  .post(create);

router
  .route('/:id')
  .get(getById)
  .put(updateById)
  .delete(deleteById);

module.exports = router
