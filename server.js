// Define app using express
var express = require("express")
var app = express()
// Require database SCRIPT file
var db = require("./database.js")
// Require md5 MODULE
var md5 = require(md5)
// Require a middleware extension for express 
var bodyParser = require("body-parser");
const md5 = require("md5");
