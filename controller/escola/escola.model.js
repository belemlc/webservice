const mongoose 	= require('mongoose');
const Schema 	= mongoose.Schema;

const EscolaSchema = new Schema({
	name: String
});

module.exports = mongoose.model('Escola', EscolaSchema);