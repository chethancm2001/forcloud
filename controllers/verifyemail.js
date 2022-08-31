const userModel = require("../models/user")

function verifyemail(req,res){
    let id = req.params.id
    
    let user = userModel.findByIdAndUpdate(id,{active:true},(err,doc)=>{
        if(err){
            return res.send('please try agian')
        }
        else{
           return  res.send("sucessfully verified")
        }
    })
}
module.exports = verifyemail