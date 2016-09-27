var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//employee
var EmployeeSchema = new Schema({
    first_name: String,
    last_name: String,
    e_mail: String,
    opt1: Boolean,
    opt2: Boolean,
    opt3: Boolean,
    opt4: Boolean,
    opt5: Boolean
},
{ collection : 'employees' });


module.exports = mongoose.model('Employee', EmployeeSchema);
