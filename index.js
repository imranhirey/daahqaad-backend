// setup basic express server
var express = require('express');
require('./db/connect');
var app = express();
var server = require('http').createServer(app);
// var io = require('socket.io')(server);
let bodyParser = require('body-parser');
let cors = require('cors');
const checkers = require('./common/checkers');
const checker = require('./common/checkers');
app.use(cors({
    origin: '*'
}));

var port = process.env.PORT || 4000;


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get('/:email', async function (req, res) {
    console.log(req.params.email)
   

})

// routes
app.use('/register', require('./routes/auth/register'));
app.use('/login', require('./routes/auth/login'));
app.use('/isexist', require('./routes/checkers'));
app.use('/sendotp', require('./routes/verification/otp'));
app.use('/checkotp', require('./routes/verification/checkotp'));
app.listen(port, function () {
    console.log('Server listening at port %d', port);
})
