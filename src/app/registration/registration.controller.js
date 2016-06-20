(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .controller('RegistrationController', RegistrationController);

    /** @ngInject */
    function RegistrationController($scope, $location, $auth, $log){
     $log.log('signup controller');
      $scope.doRegister = function(){
        $auth.submitRegistration($scope.registrationForm)
          .then(function(resp) {
              alert("Registration success");
              $log.log("response");
              $log.log(resp);
              // handle success response
          })
          .catch(function(resp) {
              $log.log(resp);
              // handle error response
          });
      };
    }
})();