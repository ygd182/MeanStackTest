//importController.js

const expenseModel = require('./../models/expenseModel');
const userModel = require('./../models/userModel');
const fs = require('fs');
var path = require('path');

'use strict';


function readJsonFile() {
	return new Promise( (resolve, reject) => { 
		fs.readFile('export.json', (err, data) => {  
	    if (err) reject(err);
	    let expenses = JSON.parse(data);
	    return resolve(expenses);
	 });
	});
}

function completeExpenses(expenses) {
	let promiseArray = [];
  expenses.forEach( (expense) => {
  	promiseArray.push(addUser(expense));
  });

  return Promise.all(promiseArray);
}

function addUser(expense) {
	return new Promise( (resolve, reject) => {
		userModel.findByIdOrCreate(expense.user, (err, user) => {
		 if (err) reject(err);
		 	return addExpense(expense).then(resolve).catch(reject);
  	});
  });
}

function addExpense(expense) {
	return new Promise( (resolve, reject) => {
		expenseModel.findByIdOrCreate(expense, (err, data) => {
		    if (err) return reject(err);
		    resolve(data);
		});
	});
}


module.exports =  {

		import: (req, res, next) => {

			readJsonFile().then(completeExpenses).then( (data) => {
					res.status(200).send('imported');
				}).catch(next);
		},

		export : (req, res, next) => {
		  expenseModel.find().populate('user').lean().exec( (err, expenses) => {
		    if (err) return next(err);

		    fs.writeFile('./export.json', JSON.stringify(expenses), (err) => {
				    if (!err) {
				        console.log('done');
				        res.sendFile(path.resolve('./export.json'));
				    }
				});

		    
		  });
		}
};