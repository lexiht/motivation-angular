(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
      .state('registration',{
        url: '/registration',
        templateUrl: 'app/registration/registration.html',
        controller: 'registrationController',
        controllerAs: 'reg'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
