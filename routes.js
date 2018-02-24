const Router	= require('express');
const router 	= new Router();

const user	= require('./controller/user/user.router');

router.route('/').get((req, res) => res.json({message: 'Welcome to NodeJs Webservice! '}))

router.use('/user', user);


module.exports = router;