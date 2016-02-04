/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors'),
    path = require('path');


module.exports = function (app) {
    // Insert routes belowç
    var router;
     router =  require('./api/thing');
    app.use('/api/things', router);
    docApi(router);
    // app.use('/api/users', require('./api/user'));

    // app.use('/auth', require('./auth'));

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
        });
}


function docApi(router) {

    console.log('\n********************************************');
    console.log('\t\tEXPRESS');
    console.log('********************************************\n');
    for (var key in router.stack) {
        // if (router.hasOwnProperty(key)) {
        var val = router.stack[key];
        if (val.route) {
            val = val.route;
            var _o = {};
            _o[val.stack[0].method] = [val.path, val.path];
            console.log(_o);
        }
        // }
    }
}