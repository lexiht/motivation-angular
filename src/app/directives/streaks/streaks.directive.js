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
        vm.streakDays = 0;

        Restangular.one('wishes',vm.wishid).one('obstacles',vm.obstacleid).all('streaks').getList().then(function(streaks){
          vm.streaks = streaks;
          $log.log(streaks);
        });


        allStreaks.getList().then(function(resp){
          vm.streakDays = countStreak(resp);
        });

        vm.isSuccessful = true;

        vm.submitResult = function(){
          allStreaks.post(vm.isSuccessful);
          $state.reload();
        };

        function countStreak(streakArray){
          var streaks = streakArray.reverse();
          var count = 0;
          for(var i= 0; i<streaks.length; i++){
            if (streaks[i] === true) {
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