const path = require('path')
const { AppSetting } = require('./app-setting');
const env = require('./env')();

const { PORT = 500 } = process.env

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
