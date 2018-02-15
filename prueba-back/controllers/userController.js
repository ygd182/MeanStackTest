'use strict';

const model = require('./../models/userModel');

'use strict';

module.exports =  {


		getAll : (req, res, next) => {
		  model.find( (err, records) => {
		    if (err) return next(err);
		    res.json(records);
		  });
		},

		create: (req, res, next) => {
		  model.create(req.body, (err, post) => {
		    if (err) return next(err);
		    res.json(post);
		  });
		},

		getById: (req, res, next) => {
		  model.findById(req.params.id, (err, post) => {
		    if (err) return next(err);
		    res.json(post);
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
		}
};