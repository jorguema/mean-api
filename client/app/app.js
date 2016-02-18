'use strict';

var app = angular.module('rankingsBackendApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'validation.match'
])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/'); 
    });
    
    app.run(["$http", "$rootScope",function($http, $rootScope) {
          $http({
            method: 'GET',
            url: '/api-docs'
        }).then(function successCallback(response) {
            $rootScope.apiDocs = response.data;
        });
}]);
       
