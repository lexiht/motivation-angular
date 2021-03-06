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
        controller: 'WishesController',
        controllerAs: 'wishes'
      })
      .state('registration',{
        url: '/registration',
        templateUrl: 'app/registration/registration.html',
        controller: 'RegistrationController',
        controllerAs: 'reg'
      })
      .state('login',{
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('wishes',{
        url: '/wishes',
        templateUrl: 'app/wishes/wishes.html',
        controller: 'WishesController',
        controllerAs: 'wishes'
      });
    $urlRouterProvider.otherwise('/');
  }

})();
