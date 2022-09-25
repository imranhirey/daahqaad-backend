// create registration schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RegistrationSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    locations:[],
    country: String,
    phonenumber: String,
    password: String,
    refrences:{
        status:'',

    }


})
module.exports = mongoose.model('users', RegistrationSchema);