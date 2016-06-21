(function(){
  'use strict';

angular
  .module('motivationAngular')
  .controller('WishesController', WishesController);

/** @ngInject */
  function WishesController($log, $scope, Restangular,wishFactory, $state) {
    var vm = this;
    vm.wishes = [];
    vm.obstacles = [];

    var allWishes = Restangular.all('wishes');
    var allObstacles = Restangular.one("wishes",vm.wishid).all("obstacles");

    allWishes.getList().then(function(response){
      $log.log(response);
      response.forEach(function(wish){
        // var singleWish = new wishFactory(wish.wish_text, wish.outcome_text);
        // vm.wishes.push(singleWish);
        vm.wishes.push(wish);
      });
    });

    allObstacles.getList().then(function(response){
      $log.log(response);
      response.forEach(function(obstacle){
        // var singleWish = new wishFactory(wish.wish_text, wish.outcome_text);
        // vm.wishes.push(singleWish);
        vm.obstacles.push(obstacles);
      });
    });

    vm.createWish = function() {
      allWishes.post($scope.wishForm);
      $state.reload();
    };

    }
  })();
