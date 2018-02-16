//expense.js
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;

var userSchema = new Schema({
	name: String
}, { versionKey: false });

userSchema.statics.findByIdOrCreate = function findByIdOrCreate(user, callback) {
    const self = this
    self.findById(user._id, (err, result) => {
        return result ? callback(err, result) : self.create(user, (err, result) => { return callback(err, result) })
    })
}

module.exports = mongoose.model('User', userSchema);