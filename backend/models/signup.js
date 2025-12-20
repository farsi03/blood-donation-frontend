const mongoose = require('mongoose');
const signupSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneno: Number,
    password:String,
    role:{type:String,
    default:"user"
    }
})
module.exports=mongoose.models.Signup || mongoose.model('Signup', signupSchema);