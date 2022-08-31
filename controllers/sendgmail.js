const nodemailer = require('nodemailer')

require('dotenv').config()

function sendemail(req,res,id){
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD,
        }
    });
     
    let mailDetails = {
        from: 'developer.chethan@gmail.com',
        to: req.body.email,
        subject: 'verification email',
        text: `please verifiy this email by clicking flowing link https://cloud-app-new.herokuapp.com/verification/${id}`
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
          return  res.send(err);
        } else {
           return res.send('verifly your email');
        }
    });

}
module.exports = sendemail