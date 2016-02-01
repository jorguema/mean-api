'use strict';

angular.module('rankingsBackendApp.auth', [
  'rankingsBackendApp.constants',
  'rankingsBackendApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
