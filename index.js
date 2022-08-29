const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send("runing sucessfully")
})
const port = process.env.PORT || 3000

app.listen(port,(err)=>{
    if(!err){
        
        console.log(`server is runing on ${port}`)

    }
    else{
        console.log("error in creating server")
    }
    
    
})