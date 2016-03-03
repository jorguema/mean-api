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

function index(req, res) {
    thingSvc.getAll()
        .then(handlers.responseWithResult(res))
        .catch(handlers.handleError(res));
}

function show(req, res) {
    thingSvc.getById(req.params.id)
        .then(handlers.handleEntityNotFound(res))
        .then(handlers.responseWithResult(res))
        .catch(handlers.handleError(res));
}

function create(req, res) {
    thingSvc.create(req.body)
        .then(handlers.responseWithResult(res, 201))
        .catch(handlers.handleError(res));
}

function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    thingSvc.update(req.params.id, req.body)
        .then(handlers.handleEntityNotFound(res))
        .then(handlers.responseWithResult(res))
        .catch(handlers.handleError(res));
}

function destroy(req, res) {
    thingSvc.remove(req.params.id)
        .then(handlers.handleEntityNotFound(res))
        .then(handlers.handleRemove(res))
        .catch(handlers.handleError(res));
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;