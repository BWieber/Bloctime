 (function() {
     function LandingCtrl($scope, $firebaseArray, Timer, Tasks) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
                  
         this.timer = Timer;
                  
         $scope.timer = Timer;
         
         $scope.task = Tasks;
         
         var mySound = new buzz.sound( "/assets/sounds/ding.mp3", {
            preload: true
         });
         
         $scope.$watch('timer.clock', function(newVal, oldVal) {
             if(newVal == 0) {
                 mySound.play();
             }
         });
         
        }   
     
     angular
         .module('blocTime')
         .controller('LandingCtrl', ['$scope', '$firebaseArray', 'Timer', 'Tasks', LandingCtrl]);
 })();