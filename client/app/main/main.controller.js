'use strict';

(function() {

class MainController {

  constructor($http, $rootScope) {
    this.apiDocs = $rootScope.apiDocs;
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('rankingsBackendApp')
  .controller('MainController', MainController);

})();
