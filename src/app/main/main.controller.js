(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($window) {
    var vm = this;

    vm.isSigned = function() {
      var isSigned =  $window.localStorage.auth_headers;
      if (isSigned) {
        return true ;
      }
      return false;
      };
    }
})();
