 (function() {
     function LandingCtrl($scope, $firebaseArray, Timer) {
         
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");

         $scope.tasks = $firebaseArray(ref); 

         $scope.addTask = function() {
              $scope.tasks.$add({
                  text: $scope.newText
              });
             
              if($scope.tasks.$add) {
                 console.log("Message Saved");
             }
          };
         
         this.timer = Timer;
                  
         $scope.timer = Timer;
                  
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
         .controller('LandingCtrl', ['$scope', '$firebaseArray', 'Timer', LandingCtrl]);
 })();