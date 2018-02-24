const config = {
  environment: process.env.NODE_ENV,
  server: {
    port: process.env.PORT || 3000
  },
  jtwSecret: 'your secret here',
  jtwSession: {session: false},
  sessionExpires: '1d'
};
module.exports = config;