(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .controller('RegistrationController', RegistrationController);

    /** @ngInject */
    function RegistrationController($location, $auth, $log,$scope){
     $log.log('Registration controller');
      var vm = this;
      vm.doRegister = function(){
        $auth.submitRegistration($scope.registrationForm)
          .then(function(resp) {
              alert("Registration success");
              $auth.submitLogin({
                email: $scope.registrationForm.email,
                password: $scope.registrationForm.password
              });
              $location.path('/')
              // handle success response
          })
          .catch(function(resp) {
              $log.log(resp);
              alert("registration has failed")
              // handle error response
          });
      };
    }
})();
