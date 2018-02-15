//expense.js
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;

var userSchema = new Schema({
	name: String
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);