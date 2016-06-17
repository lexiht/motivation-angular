(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
