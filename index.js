const express 		= require('express');
const mongoose 		= require('mongoose');
const helmet 		= require('helmet');
const cors 			= require('cors');
const bodyParser	= require('body-parser');
const morgan		= require('morgan');
const bluebird		= require('bluebird');

const routes		= require('./routes');

const app			= express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/apu/', routes);

app.list(8080);