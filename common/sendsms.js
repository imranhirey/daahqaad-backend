// twilio
var accountSid = 'ACf65835a7d9b50dd3909f7c085a1b33d8';
var authToken = 'e6293d17f6f6e59b05d50bd73823d987';
var client = require('twilio')(accountSid, authToken);
let sendsms=(to,message)=>{
    client.messages.create({
        body: message,
        to: to,  // Text this number
        from: '+19704428862' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err.message));
    
}

module.exports=sendsms;