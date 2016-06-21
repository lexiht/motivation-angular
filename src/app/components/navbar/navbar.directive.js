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
    function NavbarController($auth,$location,$window) {
      var vm = this;
      vm.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function(resp) {
          alert('successfully logged out');
          $location.path('/');
          // handle success response
        })
        .catch(function(resp) {
          alert('log out failed');
          // handle error response
        });

    };

    vm.isSigned = function() {
      var isSigned =  $window.localStorage.auth_headers;
      if (isSigned) {
        return true ;
      }
      return false;
    };

      // "vm.creationDate" is available by directive option "bindToController: true"
    }
  }

  // function SignoutController($location, $auth, $log, $scope) {
  //   var vm = this;
  //   vm.handleSignOutBtnClick = function() {
  //     $auth.signOut()
  //       .then(function(resp) {
  //         alert('successfully logged out');
  //         $location.path('/');
  //         // handle success response
  //       })
  //       .catch(function(resp) {
  //         alert('log out failed');
  //         // handle error response
  //       });
  //   };
  // }

})();
