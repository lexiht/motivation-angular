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
      });
      // .state('signout', {
      //   url: '/signout',
      //   templateUrl: 'app/navbar/navbar.html',
      //   controller: 'SignoutController',
      //   controllerAs: 'signout'
      // });

    $urlRouterProvider.otherwise('/');
  }

})();
