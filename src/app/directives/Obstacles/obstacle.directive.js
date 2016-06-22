(function() {
    'use strict';

    angular
        .module('motivationAngular')
        .directive('obstacleForm', obstacleForm);

    /** @ngInject */
    function addObstacleForm() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/directives/Obstacles/obstacleForm.html',
            scope: {
                wishid: '@'
            },
            controller: obstacleFormController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function obstacleFormController($log, $scope, Restangular, $state) {
            var vm = this;
            vm.obstacles = [];

            var allObstacles = Restangular.one("wishes",vm.wishid).all("obstacles");
            var currentObstacle = Restangular.one("wishes", vm.wishid).one("obstacles", vm.obstacleid);

            vm.isAddObstacleOpen = false;
            vm.isShowObstacleOpen = false;
            vm.isEditObstacleOpen = false;

            Restangular.one('wishes', vm.wishid).get().then(function(resp) {
                $log.log(resp);
                vm.currentWish = resp;
            });

            allObstacles.getList().then(function(response){
                $log.log(response);
                response.forEach(function(obstacle){
                    vm.obstacles.push(obstacle);
                    $log.log(vm.obstacles);
                });
            });

            vm.addObstacle = function() {
                allObstacles.post($scope.addObstacleForm);
                $state.reload();
            };

            vm.editObstacle = function() {
                vm.currentObstacle.obstacle_text = $scope.editObstacleForm.obstacle_text;
                vm.currentObstacle.plan_text = $scope.editObstacleForm.plan_text;
                vm.currentObstacle.put();
                $state.reload();
            };
        }
    }
})();
