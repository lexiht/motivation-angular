(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .factory('UserService', UserService);

    /** @ngInject */
    function UserService($window){
      return {
        isLogged: $window.localStorage.auth_headers || false
      };
    }

})();