// registaion route
const express = require('express');
const client = require('../../cache/connect');
const password = require('../../common/passwords');
const encryptPassword = require('../../common/passwords');
const router = express.Router();

// load registration model
const Registration = require('../../db/schemas/registrationschema');

router.post('/', async(req, res) => {

   let info=req.body.data
   await  client.set(info.email,JSON.stringify(info))
    let newuser= new Registration({
        name: info.name,
        age: info.age,
        email: info.email,
        locations: [info.country[0]],
        country: info.country[0],
        phonenumber: info.phone,
        password: password.encryptPassword(info.password1),
        refrences: {
            status: 'pending'
        }
    })
    newuser.save((err, data) => {
        if (err) {
            res.json({
                status: 'error',
                message: err.message
            })
        } else {
            res.json({
                status: 'success',
                message: 'you have been registered successfully'
            })
        }
    })
})

// export router
module.exports = router;