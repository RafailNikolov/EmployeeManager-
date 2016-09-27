var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//user
var UserSchema = new Schema({
    name: String,
    password: String
},
{ collection : 'users' });

module.exports = mongoose.model('User', UserSchema);
