const path = require('path')

// set environment variable
const env = async () => {
    const { NODE_ENV } = process.env

    try {
        if (NODE_ENV) {
            let filePath;
            switch (NODE_ENV) {
                case 'development':
                    filePath = path.join(__dirname, 'config-dev.env')
                    break
                case 'production':
                    filePath = path.join(__dirname, 'config-prod.env')
                    break
                case 'test':
                    filePath = path.join(__dirname, 'config-test.env')
                    break
                default:
                    throw Error('Unrecognized Environment')
            }
            require('dotenv').config({ path: filePath });
        } else {
            throw Error('Environment undefined, if local in terminal: export NODE_ENV=development')
        }

    } catch (err) {
        console.error('Environment not set')
        console.error(err);
    }
}

module.exports = env;
