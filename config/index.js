const {MONGODB_LIVE, PORT, JWT_KEY} = require('./environment')
const { dbConfigMongo } = require('./db')

module.exports = {
    PORT,
    JWT_KEY,
    MONGODB_LIVE,
    dbConfigMongo
}