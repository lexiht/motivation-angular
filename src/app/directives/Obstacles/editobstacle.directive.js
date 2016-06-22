(function() {
  'use strict';

  angular
  .module('motivationAngular')
  .directive('editObstacleForm', editObstacleForm);

  /** @ngInject */
  function editObstacleForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/Obstacles/editObstacleForm.html',
      scope: {
        wishid: '@',
        obstacleid: '@'
      },
      controller: editObstacleFormController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function editObstacleFormController($log, $scope, Restangular, $state) {
      var vm = this;
      vm.obstacles = [];

      Restangular.one("wishes", vm.wishid).all("obstacles").get(vm.obstacleid).then(function(resp){
        // $log.log(resp);
        vm.currentObstacle = resp;
      });

      vm.isEditObstacleOpen = false;


      vm.editObstacle = function() {

        vm.currentObstacle.obstacle_text = $scope.obstacleEditForm.obstacle_text;
        vm.currentObstacle.plan_text = $scope.obstacleEditForm.plan_text;
        vm.currentObstacle.put();
        $state.reload();
      };

      vm.deleteObstacle = function() {
        vm.currentObstacle.remove();
        $state.reload();
      };
    }
  }
})();
