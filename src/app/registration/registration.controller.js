(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .controller('RegistrationController', RegistrationController);

    /** @ngInject */
    function RegistrationController($scope, $location, $auth){
      $scope.handleRegBtnClick = function() {
        $auth.submitRegistration($scope.registrationForm)
          .then(function() {
            $scope.$on('auth:registration-email-success', function(ev, message) {
              alert("A registration email was sent to " + message.email);
            });
          })
          .catch(function() {
            $scope.$on('auth:registration-email-error', function(ev, reason) {
              alert("Registration failed: " + reason.errors[0]);
            });
          });
      };
    }

})();