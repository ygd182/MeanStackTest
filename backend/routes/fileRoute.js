var express = require('express');
var router = express.Router();
var fileController = require('./../controllers/fileController');


router.get('/', fileController.export);

router.post('/', fileController.import);

module.exports = router;
