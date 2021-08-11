const path = require('path')
const morgan = require('morgan')
const env = async () => {
    // Dev loggin middleware
    if (process.env.NODE_ENV === 'development') {
        require('dotenv').config({ path: path.resolve(__dirname, 'dev-config.env') })
    } else if (process.env.NODE_ENV === 'test') {
        require('dotenv').config({ path: path.resolve(__dirname, 'test-config.env') })
    } else {
        require('dotenv').config({ path: path.resolve(__dirname, 'prod-config.env') })
    }
}

module.exports = env;