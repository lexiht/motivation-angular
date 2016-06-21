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
    $log.log(allWishes);

    allWishes.getList().then(function(response){
      response.forEach(function(wish){
        $log.log(wish.wish_text);
        var singleWish = new wishFactory(wish.wish_text, wish.outcome_text);
        vm.wishes.push(singleWish);
      });
    });


    vm.createWish = function() {
      allWishes.post($scope.wishForm);
    };

    }
  })();
