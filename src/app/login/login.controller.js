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
    function LoginController($scope, $location, $auth, $log, localStorageService) {
        $log.log('LoginController');
        $scope.handleLoginBtnClick = function() {
          $auth.submitLogin($scope.loginForm)
            .then(function(resp) {
              $log.log(window.localStorage);
                return localStorageService.set('token', resp.data.access_token);
                // app.run(['$rootScope', '$location', function($rootScope, $location) {
                //   $rootScope.$on('auth:login-success', function(ev, user) {
                //     $location.path('/');
                    // alert('Welcome ', user.email);
                //   });
                // }]);

                $log.log(resp);
              // handle success response
            })
            .catch(function() {
                // $rootScope.$on('auth:login-error', function(ev, reason) {
                  alert('auth failed because');
                // });
              // handle error response
            });
        };
      }
})();
