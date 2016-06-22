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
      apiUrl: 'https://motivation-api.herokuapp.com/api',
      storage: 'localStorage'
    });
    RestangularProvider.setBaseUrl('https://motivation-api.herokuapp.com/api');

  }

})();
