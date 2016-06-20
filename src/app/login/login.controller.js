(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .controller('LoginController', LoginController);
// ["restangular","$auth",function(restangular,$auth){


  // self.username = "";
  // self.password = "";
  //
  // self.user = current_user.profile;
  //
  // self.login = function(form){
  //   if (form.$valid){
  //
  //   }
  // }



    /** @ngInject */
    function LoginController($location, $auth, $log, $scope, $window) {
        $log.log('LoginController');
        var vm = this;
        vm.handleLoginBtnClick = function() {
          $auth.submitLogin($scope.loginForm)
            .then(function(resp) {
              alert('successful');
              $location.path('/')
              // handle success response
            })
            .catch(function(resp) {
                alert('auth failed');
                // });
              // handle error response
            });
        };
      }
})();
