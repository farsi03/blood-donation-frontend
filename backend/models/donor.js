const mongoose = require('mongoose');
const donorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phno:Number,
    blood_group:String
})
const DonorModel = mongoose.model('Donor', donorSchema);
module.exports = DonorModel;