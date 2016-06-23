(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($location, $auth, $log, $scope) {
        $log.log('LoginController');
        var vm = this;
        vm.handleLoginBtnClick = function() {
          $auth.submitLogin($scope.loginForm)
            .then(function() {
              alert('successful');
              $location.path('/')
              // handle success response
            })
            .catch(function() {
                alert('auth failed');
              // handle error response
            });
        };
      }
})();
