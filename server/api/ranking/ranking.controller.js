'use strict';

var ranking = require('./ranking.model'),
    rankingSvc = require('./ranking.service'),
    handlers = require('../../components/request-handlers');

function index(req, res) {
    rankingSvc.getAll()
        .then(handlers.responseWithResult(res))
        .catch(handlers.handleError(res));
}

function show(req, res) {
    rankingSvc.getById(req.params.id)
        .then(handlers.handleEntityNotFound(res))
        .then(handlers.responseWithResult(res))
        .catch(handlers.handleError(res));
}

function create(req, res) {
    rankingSvc.create(req.body)
        .then(handlers.responseWithResult(res, 201))
        .catch(handlers.handleError(res));
}

function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    rankingSvc.update(req.params.id, req.body)
        .then(handlers.handleEntityNotFound(res))
        .then(handlers.responseWithResult(res))
        .catch(handlers.handleError(res));
}

function destroy(req, res) {
    rankingSvc.remove(req.params.id)
        .then(handlers.handleEntityNotFound(res))
        .then(handlers.handleRemove(res))
        .catch(handlers.handleError(res));
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;