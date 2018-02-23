const Router	= require('express');
const router 	= new Router();

const escola	= require('./controller/escola/escola.router');

router.route('/').get((req, res) => res.json({message: 'Tudo ok ;)'}))

router.use('/escola', escola);


module.exports = router;