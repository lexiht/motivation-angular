(function() {
  'use strict';

  angular
    .module('motivationAngular')
    .directive('Streak', Streak);

    /** @ngInject */
    function Streak(){
      var directive = {
        restrict: 'E',
        templateUrl: 'app/directives/streaks/streaks.html',
        scope: {
          wishid: "@",
          //obstacleid: "@"
        },
        controller: StreaksController,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      /** @ngInject */
      function StreakController($log, $scope, Restangular, $state) {
        var vm = this;

        var allStreaks = Restangular.one('wishes',wishid).one('obstacles',obstacleid).all('streaks');

        allStreaks.getList.then(function(resp){
          vm.streakDays = countStreak(resp);
        })

        vm.isSuccessful = true;

        vm.submitResult = function(){
          allStreaks.post(vm.isSuccessful);
          $state.reload;
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
        };
      }
    }
  })();