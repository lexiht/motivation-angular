(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .directive('wishes', wishes);

    /** @ngInject */
    function wishes() {
      var directive = {
        estrict: 'E',
        templateUrl: 'app/components/wishes/wishes.html',
        scope: {

        },
        controller: WishesController,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      /** @ngInject */
      function WishesController() {
        var vm = this;

        // "vm.creationDate" is available by directive option "bindToController: true"
      }
    }

})();
