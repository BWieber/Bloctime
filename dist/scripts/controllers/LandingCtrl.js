 (function() {
     function LandingCtrl($firebaseArray, $interval, Test, Timer) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
         
         var completedSessions = 0;
         
         var mySound = new buzz.sound( "/sounds/ding.mp3", {
            preload: true
         });
         
         
         this.timer = Timer;
         
         this.test = Test;
          
         this.timerRunning = false;
         
         this.startTimer = function() {
             this.timerRunning = true;
             this.buttonMsg = "Reset Timer"
             this.timer = $interval(function () {
                 this.clock -= 1;
                 
                 if(this.clock == 0 && completedSessions == 4) {
                     $interval.cancel(this.timer);
                     this.timerRunning = false;
                     this.breakMsg = "Great Work! - Enjoy your Break"
                     this.onBreak = true;
                     this.clock = 6;
                     completedSessions = 0;
                 }
                 
                 else if(this.clock == 0) {
                     $interval.cancel(this.timer);
                     this.timerRunning = false;
                     this.onBreak = true;
                     this.clock = 5;
                     completedSessions ++;
                 }
             }.bind(this), 1000);
         }
         
         this.resetTimer = function() {
             if (angular.isDefined(this.timer)) {
                    $interval.cancel(this.timer);
                    this.clock = 2;
                    this.timerRunning = false;
                    this.buttonMsg = 'Ready to Pomodoro again?'
             }
         }
         
         this.breakTimer = function() {
             this.timerRunning = true;
             this.onBreak = false;
             this.breakMsg = "Start Break"
             this.buttonMsg = "Reset Timer";
             this.timer = $interval(function () {
                 this.clock -= 1;
                 if(this.clock == 0) {
                     $interval.cancel(this.timer);
                     this.timerRunning = false;
                     this.buttonMsg = "Nice Work - Ready for Another Session?"
                     this.clock = 2;
                 }
             }.bind(this), 1000);
         }
         
        }   
     
     angular
         .module('blocTime')
         .controller('LandingCtrl', ['$firebaseArray', '$interval', 'Test', 'Timer', LandingCtrl]);
 })();