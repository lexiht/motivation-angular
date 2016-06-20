(function(){
  'use strict';

angular
  .module('motivationAngular')
  .controller('WishesController', WishesController);

/** @ngInject */
  function WishesController($log, $scope) {
    var vm = this;

    vm.createWish = function() {
      $log.log($scope.wishesForm);



    };

    }
  })();
