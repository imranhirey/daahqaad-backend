// registaion route
const express = require('express');
const client = require('../../cache/connect');
const router = express.Router();

// load registration model
const Registration = require('../../db/schemas/registrationschema');
const connectionstatus = require('../../globals/connections');

router.post('/bypassword', async(req, res) => {

   
})
router.post('/bygoogle', async(req, res) => {
    let {token}=req.body
    console.log(req.body.token.email)
    let cacheok= connectionstatus.redis
    let user;
    if(cacheok){
        user= await client.get(req.body.token.email)
    }
    else{
        user= 'error'
    }
    if (user=='error' || !user){
      let userfromdb= await Registration.findOne({email:req.body.token.email})
      if (userfromdb){
          res.json({
              status:'success',
              message:'user found',
              data:userfromdb
          })
      }
        else{
            res.json({
                status:'error',
                message:'user not found'
            })
        }
    }
    else{
       console.log('user found in cache')
       res.json({ 
              status:'success',
              message:'found',
       })
    }

    
    

   
})

// export router
module.exports = router;