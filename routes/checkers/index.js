// registaion route
const express = require('express');
const checker = require('../../common/checkers');
const sendcodethroughemail = require('../../common/sendemail');
const router = express.Router();


router.post('/email', async(req, res) => {
    console.log(req.body)
    try {
        let data= await checker.isemailalraedyexist(req.body.email)
        res.json({
            status: 'success',
            message: data
        })

        
    } catch (error) {
        res.json({
            status:'error',
            message:error.message
        })
        
    }

})

// export router
module.exports = router;