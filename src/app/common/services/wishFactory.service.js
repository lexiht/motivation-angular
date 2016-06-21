(function(){
  'use strict';
  angular
    .module('motivationAngular')
    .factory('wishFactory', wishFactory);

  /** @ngInject */
  function wishFactory(){
    var service = function(wish_text, outcome_text){
      this.wish_text = wish_text;
      this.outcome_text = outcome_text;
    };
    return service;
  }
})();