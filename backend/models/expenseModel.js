//expense.js
var mongoose = require('mongoose')
require('mongoose-double')(mongoose);
var Schema = mongoose.Schema;

var User = require('./userModel');

var SchemaTypes = mongoose.Schema.Types;

var expenseSchema = new Schema({
	category: String,
	total: {
        type: SchemaTypes.Double
    },
	uploadDate:  {
        type: Date, 
        default: Date.now 
    },
	description: String,
	user: {type: Schema.Types.ObjectId, ref: 'User'}
}, { versionKey: false });

module.exports = mongoose.model('Expense', expenseSchema);
