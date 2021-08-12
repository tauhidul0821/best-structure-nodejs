const path = require('path')

// set environment variable
const env = async () => {
    const { NODE_ENV } = process.env

    try {
        switch (NODE_ENV) {
            case undefined:
                throw Error('Environment undefined, if local in terminal: export NODE_ENV=development')
            case 'development':
                require('dotenv').config({ path: path.resolve(__dirname, 'config-dev.env') })
                break
            case 'production':
                require('dotenv').config({ path: path.resolve(__dirname, 'config-prod.env') })
                break
            case 'test':
                require('dotenv').config({ path: path.resolve(__dirname, 'config-test.env') })
                break
            default:
                throw Error('Unrecognized Environment')
        }
    } catch (err) {
        console.error('Environment not set')
        console.error(err);
    }
}

module.exports = env;
