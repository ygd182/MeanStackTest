var express = require('express');
var router = express.Router();
var expense = require('./expenseRoute');
var user = require('./userRoute');

router.use('/expense', expense);
router.use('/user', user);

module.exports = router;
