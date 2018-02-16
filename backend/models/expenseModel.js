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

expenseSchema.statics.findByIdOrCreate = function findByIdOrCreate(expense, callback) {
    const self = this
    self.findById(expense._id, (err, result) => {
        return result ? callback(err, result) : self.create(expense, (err, result) => { return callback(err, result) })
    })
}


module.exports = mongoose.model('Expense', expenseSchema);
