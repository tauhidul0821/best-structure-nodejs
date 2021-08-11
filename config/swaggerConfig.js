const path = require('path')
const { AppSetting } = require('./app-setting');
const env = require('./env')

env();
// Dev loggin middleware
// if (process.env.NODE_ENV === 'development') {
//     require('dotenv').config({ path: path.resolve(__dirname, 'dev-config.env') })
// } else if (process.env.NODE_ENV === 'test') {
//     require('dotenv').config({ path: path.resolve(__dirname, 'test-config.env') })
// } else {
//     require('dotenv').config({ path: path.resolve(__dirname, 'prod-config.env') })
// }

const PORT = process.env.PORT || 5000;

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
                url: `http://localhost:${PORT}${AppSetting.API_ENDPOINT}`
            }
        ]
    },
    apis: ["./routes/*.js"]
};

exports.swaggerConfig = {
    swaggerDoc: swaggerOptions,
}
