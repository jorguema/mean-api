'use strict';

var express = require('express');
var docApi = require('../doc/doc-api');

var router = express.Router();

router.get('/', function(req, res){
  res.send(docApi.getApiDocumentation());
});

module.exports = router;
