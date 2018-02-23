class EscolaController {
	find(req, res) {
		return res.status(200).json({controller: 'Escola'});
	}
}

module.exports = new EscolaController();