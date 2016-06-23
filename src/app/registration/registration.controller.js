(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .controller('RegistrationController', RegistrationController);

    /** @ngInject */
    function RegistrationController($location, $auth, $log,$scope){
      var vm = this;
      vm.doRegister = function(){
        $auth.submitRegistration($scope.registrationForm)
          .then(function() {
              alert("Registration success");
              $auth.submitLogin({
                email: $scope.registrationForm.email,
                password: $scope.registrationForm.password
              });
              $location.path('/');
              // handle success response
          })
          .catch(function() {
              alert("registration has failed");
              // handle error response
          });
      };
    }
})();
