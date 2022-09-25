var redis = require('redis');
const connectionstatus = require('../globals/connections');
let client=redis.createClient();
// handle redis errors
client.connect('localhost',6379)
client.on('connect', function() {
    console.log('connected');
    connectionstatus.redis = true;
})
client.on('error', function (err) {
 connectionstatus.redis=false
})

module.exports = client
//


