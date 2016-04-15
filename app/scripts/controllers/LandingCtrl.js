 (function() {
     function LandingCtrl($firebaseArray, $interval) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
         
         this.clock = 1500;
         
         this.timer = null;
         
         this.buttonMsg = "Time to Pomodoro!";
         
         this.timerRunning = false;
         
         this.startTimer = function() {
             this.timerRunning = true;
             this.buttonMsg = "Reset Timer"
             this.timer = $interval(function () {
                 this.clock -= 1;
             }.bind(this), 1000);
         }
         
         this.resetTimer = function() {
             if (angular.isDefined(this.timer)) {
                    $interval.cancel(this.timer);
                    this.clock = 1500;
                    this.timerRunning = false;
                    this.buttonMsg = 'Ready to Pomodoro again?'
             }
         }
         
        
     }
 
     angular
         .module('blocTime')
         .controller('LandingCtrl', ['$firebaseArray', '$interval', LandingCtrl]);
 })();