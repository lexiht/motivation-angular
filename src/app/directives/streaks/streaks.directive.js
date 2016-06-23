(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .directive('streak', streak);

    /** @ngInject */
    function streak(){
      var directive = {
        restrict: 'E',
        templateUrl: 'app/directives/streaks/streaks.html',
        scope: {
          wishid: "@",
          obstacleid: "@"
        },
        controller: StreaksController,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      /** @ngInject */
      function StreaksController($log, $scope, Restangular, $state) {
        var vm = this;

        var currentObstacle = Restangular.one('wishes',vm.wishid).one('obstacles',vm.obstacleid);

        currentObstacle.all('streaks').getList().then(function(resp){
          $log.log(resp);
          vm.streakDays = countStreak(resp);
        });

        vm.isSuccessful = true;

        vm.submitResult = function(){
          currentObstacle.all('streaks').post($scope.recordProgressForm);
          $state.reload();
        };

        function countStreak(streakArray){
          var streaks = streakArray.reverse();
          var count = 0;
          for(var i= 0; i<streaks.length; i++){
            if (streaks[i].completed === true) {
              count++;
            } else {
              break;
            }
          }
          return count;
        }
      }
    }
  })();