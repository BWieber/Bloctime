 (function() {
     function LandingCtrl($firebaseArray, $interval) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
         
         this.clock = 1500;
         
         this.timer = null;
         
         this.startTimer = function() {
             this.timer = $interval(function () {
                 this.clock -= 1;
             }.bind(this), 1000);
         }
         
         this.stopTimer = function() {
             if (angular.isDefined(this.timer)) {
                    $interval.cancel(this.timer);
             }
         }
         
        
     }
 
     angular
         .module('blocTime')
         .controller('LandingCtrl', ['$firebaseArray', '$interval', LandingCtrl]);
 })();