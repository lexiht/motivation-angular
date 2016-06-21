(function() {
	'use strict';

	angular
		.module('motivationAngular')
		.directive('addObstaclesForm', addObstacles);

	/** @ngInject */
	function addObstacles() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/directives/addObstacles/addObstacleForm.html',
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

			vm.isAddObstacleOpen = false;

			Restangular.one('wishes', vm.wishid).get().then(function(resp) {
				$log.log(resp);
				vm.currentWish = resp;
			});

			vm.addObstacle = function() {
				vm.currentWish.obstacle_text = $scope.addObstacleForm.obstacle_text;
				vm.currentWish.plan_text = $scope.addObstacleForm.plan_text;
				vm.currentWish.post();
				$state.reload();
			}
		}
	}
})();