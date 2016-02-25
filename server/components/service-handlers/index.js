'use strict';

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
    }
};
