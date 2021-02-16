const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err }

  // Log to console for dev 
  console.log(err.stack.red);

  // Mongoose bad ObjectId
  if(err.name === 'CastError'){
    const message = `Bootcamp not found with id of ${err.value}`;
    error = new ErrorResponse(message,404);
  }

  // Mongoose duplicate key
  if(err.code === 11000){
    const message = 'Dupllicate field value entered'
    err = new ErrorResponse(message,400);

  }

  res.status(err.statusCode || 500).json({ success: false, error: err.message })

}

module.exports = errorHandler;