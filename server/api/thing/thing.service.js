'use strict';

var _ = require('lodash'),
    Thing = require('./thing.model'),
    handlers = require('../../components/service-handlers');

function getAll() {
    var promise = Thing.findAsync();
    promise
        .then(handlers.successCallback())
        .catch(handlers.errorCallback());

    return promise;
}

function getById(id) {
    var promise = Thing.findByIdAsync(id);
    promise
        .then(handlers.notFoundCallback())
        .catch(handlers.errorCallback());

    return promise;
}

function create(doc) {
    var promise = Thing.createAsync(doc);
    promise
        .then(handlers.successCallback())
        .catch(handlers.errorCallback());

    return promise;
}

function update(id, doc) {
    var promise = Thing.findByIdAsync(id)
    promise
        .then(handlers.notFoundCallback())
        .then(handlers.saveCallback(doc))
        .then(handlers.successCallback())
        .catch(handlers.errorCallback());

    return promise;
}

function remove(id){
    var promise = Thing.findByIdAsync(id)
    promise
        .then(handlers.notFoundCallback())
        .then(handlers.removeCallback())
        .catch(handlers.errorCallback());
        
    return promise;
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;

