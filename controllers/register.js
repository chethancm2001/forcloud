const userModel = require('../models/user')
const Joi = require('joi')
const sendemail = require('./sendgmail')

    let Schema = Joi.object().keys({
        name:Joi.string().min(3).required(),
        email:Joi.string().min(3).email().required(),
        password:Joi.string().min(3).required()
    })


async function register(req,res,next){
let {name, email,password} = req.body

let result = Schema.validate({name, email,password})

if(result.error != null){
   let array = result.error
   console.log(array)
   return res.json({len: result.error.details[0].message})
}

let user = new userModel({name,email,password})
try{
let result = await user.save()
let id = result._id
sendemail(req,res,id)

}
catch(exp){

    if(exp.code == '11000'){
        return res.status(409).json({"message":"email is already prasent"})
         }
        
     return res.status(409).json({message:"failed to save retry"})
}
}
module.exports = register