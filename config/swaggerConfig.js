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

exports.swaggerConfig = {
    swaggerDoc: swaggerOptions,
}
