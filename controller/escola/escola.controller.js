const Escola = require('./escola.model');

class EscolaController {
	find(req, res) {
		Escola.find(function (err, escola) {
			return res.status(200).json({controller: JSON.stringify(escola)});
		})
	}
}

module.exports = new EscolaController();