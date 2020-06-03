let express = require('express')
let app = express()
let port = process.env.PORT || 5000;
const bodyParser = require("body-parser")
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())






app.use(session({
	secret: 'secret',
	resave: true,
    saveUninitialized: true,
    cookie : {maxAge : 1000*60*60*24}
}));
let route = require('./api/routes')
route(app)


app.listen(port)

console.log('RESTful API server is running on port : ' + port)


