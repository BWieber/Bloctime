 (function() {
     function LandingCtrl($firebaseArray, $interval, Timer, $scope) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
                  
         this.timer = Timer;
        
        }   
     
     angular
         .module('blocTime')
         .controller('LandingCtrl', ['$firebaseArray', '$interval', 'Timer', LandingCtrl]);
 })();