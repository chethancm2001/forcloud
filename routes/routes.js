const router = require('express').Router()
const login = require("../controllers/login")
router.get('/',(req,res)=>{
    res.send(`from router this is ${process.env.MYNAME}`)
})

router.post('/login',login)


module.exports = router