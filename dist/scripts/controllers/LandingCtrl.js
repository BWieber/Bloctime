 (function() {
     function LandingCtrl($firebaseArray, $interval) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
         
         this.onBreak = false;
         
         this.clock = 2;
         
         this.timer = null;
         
         this.buttonMsg = "Time to Pomodoro!";
         
         this.breakMsg = "Start Break";
         
         this.timerRunning = false;
         
         this.startTimer = function() {
             this.timerRunning = true;
             this.buttonMsg = "Reset Timer"
             this.timer = $interval(function () {
                 this.clock -= 1;
                 if(this.clock == 0) {
                     $interval.cancel(this.timer);
                     this.timerRunning = false;
                     this.onBreak = true;
                     this.clock = 300;
                 }
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