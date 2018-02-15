var express = require('express');
var router = express.Router();
var expenseController = require('./../controllers/expenseController');


router.get('/', expenseController.getAll);

router.post('/', expenseController.create);

router.get('/:id', expenseController.getById);

router.put('/:id', expenseController.update);

router.delete('/:id', expenseController.delete);

module.exports = router;
