(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($window, $scope, Restangular, $state) {
    var vm = this;
    vm.wishes = [];

    var allWishes = Restangular.all('wishes');


    allWishes.getList().then(function(response){
      response.forEach(function(wish){
        vm.wishes.push(wish);
      });
    });

    vm.isSigned = function() {
      var isSigned =  $window.localStorage.auth_headers;
      if (isSigned) {
        return true ;
      }
      return false;
      };
    }
})();
