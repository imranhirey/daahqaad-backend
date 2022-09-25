// registaion route
const express = require('express');
const client = require('../../cache/connect');
const sendcodethroughemail = require('../../common/sendemail');
const sendsms = require('../../common/sendsms');

const router = express.Router();


router.post('/email', async(req, res) => {
    let {email}=req.body
    let otp= Math.floor(100000 + Math.random() * 900000)
    console.log(otp,email)
    client.set(otp.toString(),email)
    sendcodethroughemail('email',email,otp)
   res.json({
         status:'success',
         message:'otp sent'
   })

})

router.post('/phonenumber', async(req, res) => {
      let {number}=req.body
      console.log(number)
      let otp= Math.floor(100000 + Math.random() * 900000)
      console.log(otp,number)
      client.set(otp.toString(),number)
     sendsms(number,'your otp is '+otp+' valid for only  5 minutes ')
     res.json({
           status:'success',
           message:'otp sent'
     })
  
  })
  
// export router
module.exports = router;