'use strict';
var _ = require('lodash');

module.exports = {
    successCallback: function () {
        return function (entity) {
            if (entity) {
                return entity;
            }
        };
    },
    errorCallback: function () {
        return function (err) {
            return err;
        };
    },
    notFoundCallback: function () {
        return function (entity) {
            if (!entity) {
                return null;
            }
            return entity;
        };
    },
    saveCallback: function (updates) {
        return function (entity) {
            if (!entity) return null;
            var updated = _.merge(entity, updates);
            return updated.saveAsync()
                .spread(updated => {
                    return updated;
                });
        };
    },
    removeCallback: function () {
        return function (entity) {
            if (entity) {
                return entity.removeAsync();
            }
        }
    }
};
