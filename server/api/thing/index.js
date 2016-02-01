'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

console.log('\n********************************************');
console.log('\t\tEXPRESS');
console.log('********************************************\n');
for (var key in router) {
    if (router.hasOwnProperty(key)) {
        var val = router[key];
        if (val.route) {
            val = val.route;
            var _o = {};
            _o[val.stack[0].method] = [val.path, val.path];
            // table.push(_o);
        }
    }
}

module.exports = router;
