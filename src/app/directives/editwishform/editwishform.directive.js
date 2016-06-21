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
          wish_id: "="
        },
        controller: editWishFormController,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      /** @ngInject */
      function editWishFormController($log,$scope, Restangular) {
        var vm = this;
        var allWishes = Restangular.all('wishes');

        vm.log = function(id){
          $log.log(id);
        }
      }

    }
})();