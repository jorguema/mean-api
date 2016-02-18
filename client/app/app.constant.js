(function (angular, undefined) {
    'use strict';

    angular.module('rankingsBackendApp.constants', [])

        .constant('appConfig', { userRoles: ['guest', 'user', 'admin'] })

    ;
})(angular);