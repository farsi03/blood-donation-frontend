const mongoose=require('mongoose');
const requestSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    phone:Number,
    bloodGroup:String,
    category:String,
    units:Number
})
const RequestModel=mongoose.model('Request',requestSchema);
module.exports=RequestModel;