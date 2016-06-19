angular.module("motivationAngular")
  .controller("registrationController", ["$scope", "$auth",function($scope, $auth) {
      $scope.handleRegBtnClick = function() {
        $auth.submitRegistration($scope.registrationForm)
          .then(function(resp) {
            // handle success response
          })
          .catch(function(resp) {
            // handle error response
          });
      };
  }]);