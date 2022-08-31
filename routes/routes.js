const router = require('express').Router()
const login = require("../controllers/login")
const register = require('../controllers/register')
const sendemail = require('../controllers/sendgmail')
const verifyemail = require('../controllers/verifyemail')
router.get('/',(req,res)=>{
    res.send(`from router this is ${process.env.MYNAME}`)
})

router.post('/login',login)

router.post('/register',register)

router.get('/sendemail',sendemail)

router.get('/verification/:id',verifyemail)
module.exports = router