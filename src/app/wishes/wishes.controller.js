(function(){
  'use strict';

angular
  .module('motivationAngular')
  .controller('WishesController', WishesController);

/** @ngInject */
  function WishesController($log, $scope, Restangular) {
    var vm = this;

    var allWishes = Restangular.all('wishes');
      $log.log(allWishes);



    allWishes.getList().then(function(wishes){
      vm.wishes = wishes;
    });

    $log.log(vm.wishes);
    vm.createWish = function() {
      $log.log($scope.wishForm);
      allWishes.post($scope.wishForm);
    };

    }
  })();
