(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {

      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($auth,$location,$window, $state,UserService) {
      var vm = this;

      vm.loginStatus = UserService.isLogged;

      vm.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function() {
          $window.localStorage.removeItem("auth_headers");
          UserService.isLogged = false;
          alert('successfully logged out');
          $state.reload();
          // handle success response
        })
        .catch(function() {
          alert('log out failed. You are trapped forever');
          $state.reload();
          // handle error response
        });

      };

    }
  }


})();
