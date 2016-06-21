(function(){
  'use strict';

angular
  .module('motivationAngular')
  .controller('WishesController', WishesController);

/** @ngInject */
  function WishesController($log, $scope, Restangular,wishFactory) {
    var vm = this;
    vm.wishes = [];

    var allWishes = Restangular.all('wishes');

    allWishes.getList().then(function(response){
      $log.log(response);
      response.forEach(function(wish){
        // var singleWish = new wishFactory(wish.wish_text, wish.outcome_text);
        // vm.wishes.push(singleWish);
        $log.log(wish);
        vm.wishes.push(wish);
      });
    });


    vm.createWish = function() {
      allWishes.post($scope.wishForm);
    };

    }
  })();
