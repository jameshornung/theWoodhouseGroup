var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var db = mongoose.connection;



// ROUTES====================================================
router.get('/', function(req, res, body){
	res.render('index');
})

router.get('/about', function(req, res, body){
	res.render('about');
})

router.get('/clients', function(req, res, body){
	res.render('clients');
})

router.get('/testimonials', function(req, res, body){
	res.render('testimonials');
})

router.get('/contact', function(req, res, body){
	res.render('contact');
})



module.exports = router;