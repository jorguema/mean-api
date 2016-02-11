'use strict';

var express = require('express');
var controller = require('./thing.controller');
var docApi = require('../doc/doc-api');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

docApi.addDocumentation('things', router);

module.exports = router;
