// server.js

// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express

// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location 

// listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");
