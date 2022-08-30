const express = require('express')
const config = require('./config/config')
const app = express()
const router = require("./routes/routes")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)



const port = process.env.PORT || 3000
config()
app.listen(port,(err)=>{
    if(!err){
        
        console.log(`server is runing on ${port}`)

    }
    else{
        console.log("error in creating server")
    }
    
    
})