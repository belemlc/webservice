const db = {
  mongo: {
      uri: process.env.MONGO_DB_URI || "mongodb://localhost/test",
      options: {
          socketTimeoutMS: 30000,
          keepAlive: true,
          reconnectTries: 30
      }
  }
}
module.exports = db;