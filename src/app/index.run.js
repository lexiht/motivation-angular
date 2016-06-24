(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $location, $state, UserService) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
      var isLogin = ((toState.name === "login") || (toState.name === "registration"));
        if(isLogin){
           return;
        }

      if (!UserService.isLogged) {
        e.preventDefault();
        $state.go('login');
      }
    });
  }

})();
