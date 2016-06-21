(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .directive('editWishForm', editWishForm);

    /** @ngInject */
    function editWishForm(){
      var directive = {
        restrict: 'E',
        templateUrl: 'app/directives/editwishform/editwishform.html',
        scope: {
          wishid: "@"
        },
        controller: editWishFormController,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      /** @ngInject */
      function editWishFormController($log, $scope, Restangular) {
        var vm = this;

        vm.isEditFormOpen = false;

        Restangular.one('wishes', vm.wishid).get().then(function(resp){
          $log.log(resp);
          vm.currentWish = resp;
        });

        vm.editWish = function(){
          $log.log($scope.wishEditForm.wish_text);
          vm.currentWish.wish_text = $scope.wishEditForm.wish_text;
          vm.currentWish.outcome_text = $scope.wishEditForm.outcome_text;
          vm.currentWish.put();
        }
      }

    }
})();
