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

			var allObstacles = Restangular.one("wishes",vm.wishid).all("obstacles");


			vm.isAddObstacleOpen = false;

			Restangular.one('wishes', vm.wishid).get().then(function(resp) {
				$log.log(resp);
				vm.currentWish = resp;
			});

			vm.addObstacle = function() {
				allObstacles.post($scope.addObstacleForm);
				$state.reload();
			};
		}
	}
})();
