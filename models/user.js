const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:false,
        required:true,
    }
})
let userModel = mongoose.model('Users',userSchema)

module.exports = userModel