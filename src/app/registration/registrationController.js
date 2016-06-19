angular.module("motivationAngular")
  .controller("registrationController", ["$scope", "$auth",function($scope, $auth) {
      $scope.handleRegBtnClick = function() {
        $auth.submitRegistration($scope.registrationForm)
          .then(function(resp) {
            // store the returned token in local storage
            // log in the user
            // redirect to wish page
          })
          .catch(function(resp) {
            // handle error response
            // use the returned error message to show user
          });
      };
  }]);