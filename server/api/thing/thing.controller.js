/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 * POST    /api/things              ->  create
 * GET     /api/things/:id          ->  show
 * PUT     /api/things/:id          ->  update
 * DELETE  /api/things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash'),
    Thing = require('./thing.model'),
    thingSvc = require('./thing.service'),
    handlers = require('../../components/request-handlers');


// function handleError(res, statusCode) {
//     statusCode = responseStatus.InternalError(statusCode);
//     return function (err) {
//         res.status(statusCode).send(err);
//     };
// }
// 
// function responseWithResult(res, statusCode) {
//     statusCode = responseStatus.Ok(statusCode);
//     return function (entity) {
//         if (entity) {
//             res.status(statusCode).json(entity);
//         }
//     };
// }
// 
// function handleEntityNotFound(res) {
//     return function (entity) {
//         if (!entity) {
//             res.status(responseStatus.NotFound()).end();
//             return null;
//         }
//         return entity;
//     };
// }

function saveUpdates(updates) {
    return function (entity) {
        var updated = _.merge(entity, updates);
        return updated.saveAsync()
            .spread(updated => {
                return updated;
            });
    };
}

function removeEntity(res) {
    return function (entity) {
        if (entity) {
            return entity.removeAsync()
                .then(() => {
                    res.status(204).end();
                });
        }
    };
}

// Gets a list of Things
function index(req, res) {
    thingSvc.getAll()
        .then(handlers.responseWithResult(res))
        .catch(handlers.handleError(res));
}


// Gets a single Thing from the DB
function show(req, res) {
    thingSvc.getById(req.params.id)
        .then(handlers.handleEntityNotFound(res))
        .then(handlers.responseWithResult(res))
        .catch(handlers.handleError(res));
}


// Creates a new Thing in the DB
function create(req, res) {
    thingSvc.create(req.body)
        .then(handlers.responseWithResult(res, 201))
        .catch(handlers.handleError(res));
}


// Updates an existing Thing in the DB
function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Thing.findByIdAsync(req.params.id)
        .then(handlers.handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(handlers.responseWithResult(res))
        .catch(handlers.handleError(res));
}


// Deletes a Thing from the DB
function destroy(req, res) {
    Thing.findByIdAsync(req.params.id)
        .then(handlers.handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handlers.handleError(res));
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;