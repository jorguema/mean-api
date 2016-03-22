/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors'),
    path = require('path'),
    docApi = require('./api/doc/doc-api'),
    apiVersion = '/api/';


module.exports = function (app) {
    // Insert routes below
   
    app.use(apiVersion + 'things', require('./api/thing'));
    app.use(apiVersion + 'rankings', require('./api/ranking'));
    app.use('/api-docs', require('./api/doc'));
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


    docApi.getApiDocumentation();
}