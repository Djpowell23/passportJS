// Declarations
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require("mongoose");
var passport = require("passport");
var flash = require("connect-flash");

var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");

var configDB = require("./config/database.js");

// Configuration
mongoose.connect(configDB.url); // connect to our database
require("./config/passport")(passport); // pass passport for configuration

// Set Up Our Express Application
app.use(morgan("dev")); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set("view engine", "ejs"); // set up ejs for templating

// Required for Passport
app.use(session({ secret: "ilovescotchscotchyscotchscotch" })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Routes
require("./app/routes.js")(app, passport); // load our routes and pass in our app

// Launch
app.listen(port);
console.log("The magic happens on port " + port);
