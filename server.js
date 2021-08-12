const path = require('path')
const express = require('express');
const env = require('./config/env')();
// const logger = require('./middleware/logger')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const { swaggerConfig } = require('./config/swaggerConfig');
const connectDB = require('./config/db');
const colors = require('colors')
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error')
const { AppSetting } = require('./config/app-setting');


const { NODE_ENV, PORT = 2000 } = process.env;

// Connect to database 
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');
const personRoutes = require('./routes/personRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
// const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// swagger configuration
const specs = swaggerJsDoc(swaggerConfig.swaggerDoc);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// app.use(logger);

if (NODE_ENV === ('development' || 'test')) {
  app.use(morgan('dev'));
}

// Mount routers
app.use(`${AppSetting.API_ENDPOINT}/bootcamps`, bootcamps);
app.use(`${AppSetting.API_ENDPOINT}/courses`, courses);
app.use(`${AppSetting.API_ENDPOINT}/auth`, auth);
app.use(`${AppSetting.API_ENDPOINT}/persons`, personRoutes);
app.use(`${AppSetting.API_ENDPOINT}/teachers`, teacherRoutes);
// app.use(`${AppSetting.API_ENDPOINT}/students`, studentRoutes);


app.use(errorHandler);

const server = app.listen(PORT, console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
