'use strict';

angular.module('rankingsBackendApp', [
  'rankingsBackendApp.auth',
  'rankingsBackendApp.admin',
  'rankingsBackendApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

  
  });
