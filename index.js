const express 		= require('express');
const mongoose 		= require('mongoose');
const helmet 		= require('helmet');
const cors 			= require('cors');
const bodyParser	= require('body-parser');
const morgan		= require('morgan');
const bluebird		= require('bluebird');
const logger     = require('winston');

const db        = require('./db');
const config    = require('./config');
const routes		= require('./routes');

const app			= express();

mongoose.Promise = bluebird;
mongoose.connect(db.mongo.uri)
.then(() => {
  logger.log('info', 'connected to mongodb');
})
.catch((error) => {
  logger.log('info', 'error connecting to db: ' + error);
});

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/api/', routes);

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`);
});

module.exports = app;