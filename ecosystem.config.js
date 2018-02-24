/* Ecosystem for pm2 */
module.exports = {
  apps : [
    {
      name   : "Production",
      script : "./index.js",
      env: {
          "PORT": 8080,
          "NODE_ENV": "production",
          "MONGO_DB_URI": ""
      }
    },
    {
      name: "Development",
      script: "./index.js",
      env: {
          "PORT": 3000,
          "NODE_ENV": "development",
          "MONGO_DB_URI": "mongodb://localhost/test"
      }
    }
  ]
}
