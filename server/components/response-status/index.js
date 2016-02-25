'use strict';

module.exports = {
    Ok: function (statusCode) {
        return statusCode = statusCode || 200;
    },
    InternalError: function (statusCode) {
        return statusCode = statusCode || 500;
    },
    NotFound: function () {
        return 404;
    }
};
