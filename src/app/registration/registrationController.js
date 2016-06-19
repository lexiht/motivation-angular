angular.module("motivationAngular")
  .controller("registrationController", ["$scope", "$location", "$auth",function($scope, $location, $auth) {
      $scope.handleRegBtnClick = function() {
        $auth.submitRegistration($scope.registrationForm)
          .then(function() {
            $scope.$on('auth:registration-email-success', function(ev, message) {
              alert("A registration email was sent to " + message.email);
            });
            // store the returned token in local storage
            // log in the user
            // redirect to wish page
          })
          .catch(function() {
            $scope.$on('auth:registration-email-error', function(ev, reason) {
              alert("Registration failed: " + reason.errors[0]);
}           });
            // handle error response
            // use the returned error message to show user
          });
      };
  }]);