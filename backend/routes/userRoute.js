var express = require('express');
var router = express.Router();

var userController = require('./../controllers/userController');

router.get('/', userController.getAll);

router.post('/', userController.create);

router.get('/:id', userController.getById);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;

