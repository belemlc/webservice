const controller = require('./escola.controller');
const Router = require('express').Router;
const router = new Router();

router.route('/')
	.get((args...) => controller.find());


module.exports = router;