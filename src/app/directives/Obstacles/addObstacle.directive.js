(function() {
	'use strict';

	angular
		.module('motivationAngular')
		.directive('addObstacleForm', addObstacleForm);

	/** @ngInject */
	function addObstacleForm() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/directives/Obstacles/addObstacleForm.html',
			scope: {
				wishid: '@'
			},
			controller: addObstacleFormController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		/** @ngInject */
		function addObstacleFormController($log, $scope, Restangular, $state) {
			var vm = this;
			vm.obstacles = [];

			var allObstacles = Restangular.one("wishes",vm.wishid).all("obstacles");


			vm.isAddObstacleOpen = false;
			vm.isShowObstacleOpen = false;

			Restangular.one('wishes', vm.wishid).get().then(function(resp) {
				$log.log(resp);
				vm.currentWish = resp;
			});

			allObstacles.getList().then(function(response){
	      $log.log(response);
	      response.forEach(function(obstacle){
	        vm.obstacles.push(obstacle);
					$log.log(vm.obstacles)
	      });
	    });


			vm.addObstacle = function() {
				allObstacles.post($scope.addObstacleForm);
				$state.reload();
			};
		}
	}
})();
