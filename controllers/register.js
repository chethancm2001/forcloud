const mongoose = require('mongoose')
const userModel = require('../models/user')
const Joi = require('joi')




    let Schema = Joi.object().keys({
        name:Joi.string().min(3).required(),
        email:Joi.string().min(3).email().required(),
        password:Joi.string().min(3).required()
    })


async function register(req,res){
let {name, email,password} = req.body

let result = Schema.validate({name, email,password})
if(result.error != null){
   
   return res.json({len: result.error.details.length})
}

 return res.send(result)
let user = new userModel({name,email,password})
try{
let result = await user.save()
if(result != null){
   res.json(result)
}
else{
    res.send('error')
}

}
catch(err){
res.send(err)
}
}
module.exports = register