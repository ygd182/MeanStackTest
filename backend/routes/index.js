var express = require('express');
var router = express.Router();
var expense = require('./expenseRoute');
var user = require('./userRoute');
var file = require('./fileRoute');

router.use('/expense', expense);
router.use('/user', user);
router.use('/file', file);


module.exports = router;
