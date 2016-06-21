(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .config(config);

  /** @ngInject */
  function config($logProvider, $authProvider, RestangularProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    //Set api route for ng-token-auth
    $authProvider.configure({
      apiUrl: 'http://localhost:3000/api',
      storage: 'localStorage'
    });
    RestangularProvider.setBaseUrl('http://localhost:3000/api');

  }

})();
