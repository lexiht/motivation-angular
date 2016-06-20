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
    function LoginController($scope, $location, $auth, $log) {
        $log.log('LoginController');
        $scope.handleLoginBtnClick = function() {
          $auth.submitLogin($scope.loginForm)
            .then(function(resp) {
              $log.log(resp);
              $log.log(window.localStorage);
              alert('successful');
              // handle success response
            })
            .catch(function(resp) {
                $log.log(resp);
                alert('auth failed');
                // });
              // handle error response
            });
        };
      }
})();
