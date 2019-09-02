/** Setup local test environment variables */
require('dotenv').config({ path: '.test.env' })

module.exports = {
    testEnvironment: 'node',
    verbose: true
}