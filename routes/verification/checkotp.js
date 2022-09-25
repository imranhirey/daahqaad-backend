// registaion route
const express = require('express');
const client = require('../../cache/connect');
const sendcodethroughemail = require('../../common/sendemail');

const router = express.Router();


router.post('/email', async(req, res) => {
    let {email,otp}=req.body
    console.log(req.body)
    // client.set(otp,email)
    let data= await client.get(otp)
    console.log(data)
    if(data==email){
        client.del(otp)
        res.json({
            status:'success',
            message:'otp verified'
        })
    }
    else{
        res.json({
            status:'error',
            message:'otp not verified'
        })
    }
  

})

router.post('/number', async(req, res) => {
    let {number,otp}=req.body
    console.log(req.body)
    // client.set(otp,email)
    let data= await client.get(otp)
    console.log(data)
    if(data==number){
        client.del(otp)
        res.json({
            status:'success',
            message:'otp verified'
        })
    }
    else{
        res.json({
            status:'error',
            message:'otp not verified'
        })
    }
  

})


// export router
module.exports = router;