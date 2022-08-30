const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send(`from router this is ${process.env.MYNAME}`)
})




module.exports = router