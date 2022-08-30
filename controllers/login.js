function login(req,res){
let {email,password} = req.body
res.json({email,password})
}
module.exports = login