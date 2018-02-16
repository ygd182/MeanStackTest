//expenseController.js

const model = require('./../models/expenseModel');
const userModel = require('./../models/userModel');
const fs = require('fs');
var path = require('path');

'use strict';

module.exports =  {
	
		getAll : (req, res, next) => {
		  model.find().populate('user').exec( (err, expenses) => {
		    if (err) return next(err);
		    res.json(expenses);
		  });
		},

		create: (req, res, next) => {
			userModel.findById(req.body.user.id ,(err, user) => { 
		    if (err) return next(err);
		    req.body.user = user;
			  model.create(req.body, (err, post) => {
			    if (err) return next(err);
			    res.json(post);
			  });
			});
		},

		getById: (req, res, next) => {
		  model.findById(req.params.id).populate('user').exec( (err, expense) => { 
		    if (err) return next(err);
		    res.json(expense);
		  });
		},

		update: (req, res, next) => {
		  model.findByIdAndUpdate(req.params.id, req.body,
		    (err, post) => {
		      if (err) return next(err);
		      res.json(post);
		    });
		},

		delete: (req, res, next) => {
		  model.findByIdAndRemove(req.params.id, req.body,
		    (err, post) => {
		      if (err) return next(err);
		      res.json(post);
		    });
		},

};