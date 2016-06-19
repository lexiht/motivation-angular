(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,$authProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //Set api route for ng-token-auth
    $authProvider.configure({
      apiUrl: 'http://localhost:3000/api'
    });
  }

})();

// angular.module('motivationAngular', ['ng-token-auth'])
//   .config(function($authProvider) {
//     $authProvider.configure({
//         apiUrl: 'http://localhost:3000/api'
//     });
//   });