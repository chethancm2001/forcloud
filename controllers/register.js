const mongoose = require('mongoose')
const userModel = require('../models/user')
async function register(req,res){
let {name, email,password} = req.body
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