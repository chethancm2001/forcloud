const mongoose = require('mongoose')
require('dotenv').config()
function config(){
    
    mongoose.connect(process.env.MONGOOSE_URL)
    .then((res)=>{
        console.log('connected to db')
    })
    .catch((err)=>{console.log('falied to connect to db')})
}
module.exports = config