'use strict';

var responseStatus = require('../response-status');

module.exports = {
    handleError: function (res, statusCode) {
        statusCode = responseStatus.InternalError(statusCode);
        return function (err) {
            res.status(statusCode).send(err);
        };
    },
    responseWithResult: function (res, statusCode) {
        statusCode = responseStatus.Ok(statusCode);
        return function (entity) {
            if (entity) {
                res.status(statusCode).json(entity);
            }
        };
    },
    handleEntityNotFound: function (res) {
        return function (entity) {
            if (!entity) {
                res.status(responseStatus.NotFound()).end();
                return null;
            }
            return entity;
        };
    },
    handleRemove: function (res) {
        return function (entity) {
            if (entity)
                res.status(204).end();
        };
    }
};
