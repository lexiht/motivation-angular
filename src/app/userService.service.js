(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .factory('UserService', UserService);

    /** @ngInject */
    function UserService(){
      return {
        isLogged: false
      };
    }

})();