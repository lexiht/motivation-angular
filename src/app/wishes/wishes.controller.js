(function(){
  'use strict';

angular
  .module('motivationAngular')
  .controller('WishesController', WishesController);

/** @ngInject */
  function WishesController($log, $scope, Restangular, $state) {
    var vm = this;
    vm.wishes = [];
    vm.obstacles = [];

    var allWishes = Restangular.all('wishes');


    allWishes.getList().then(function(response){
      response.forEach(function(wish){
        vm.wishes.push(wish);
      });
    });

    vm.createWish = function() {
      allWishes.post($scope.wishForm);
      $state.reload();
    };
  }
})();
