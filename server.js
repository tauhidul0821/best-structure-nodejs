const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const connectDB = require('./config/db');
const colors = require('colors')
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error')
const { AppSetting } = require('./config/app-setting');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Devcamper API',
      description: 'info',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1'
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsDoc(swaggerOptions);


// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database 
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');
// const personRoutes = require('./routes/personRoutes');
// const teacherRoutes = require('./routes/teacherRoutes');

const app = express();

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// swagger api docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


// app.use(logger);

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use(`${AppSetting.API_ENDPOINT}/bootcamps`, bootcamps);
app.use(`${AppSetting.API_ENDPOINT}/courses`, courses);
app.use(`${AppSetting.API_ENDPOINT}/auth`, auth);
// app.use(`${AppSetting.API_ENDPOINT}/persons`, personRoutes);
// app.use(`${AppSetting.API_ENDPOINT}/teachers`, teacherRoutes);



app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
