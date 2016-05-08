 (function() {
     function Timer($interval, TIMES) {
         
         var Timer = {};
         
         var message = "This is a test.";
          
         Timer.timerRunning = false;
         Timer.breakMsg = "Start Break";
         Timer.onBreak = false;
         Timer.buttonMsg = "Time to Pomodoro! (Timer)";
         Timer.completedSessions = 0;
         
         Timer.timer = null;
         Timer.clock = 2;
         
         Timer.start = function() {
             Timer.timerRunning = true;
             Timer.buttonMsg = "Reset Timer (Timer)";
             Timer.onBreak = false;
             
             Timer.timer = $interval(function (){
                 Timer.clock--;
                 
                 if(Timer.clock == 0 && Timer.completedSessions == 4) {
                     $interval.cancel(Timer.timer);
                        Timer.timerRunning = false;
                        Timer.breakMsg = "Great Work! - Enjoy your Break (Timer)"
                        Timer.onBreak = true;
                        Timer.clock = 10;
                        Timer.completedSessions = 0;
                 }

                 else if(Timer.clock == 0) {
                     $interval.cancel(Timer.timer);
                         Timer.timerRunning = false;
                         Timer.breakMsg = "Start Break";
                         Timer.onBreak = true;
                         Timer.clock = 3;
                         Timer.completedSessions ++;
                 }
                 
                 
             }.bind(this), 1000);
           }
         
         Timer.reset = function() {
             if (angular.isDefined(Timer.timer)) {
                    $interval.cancel(Timer.timer);
                    Timer.clock = 2;
                    Timer.timerRunning = false;
                    Timer.buttonMsg = 'Ready to Pomodoro again?'
             }
         }
         
         Timer.break = function() {
             Timer.timerRunning = true;
             Timer.onBreak = false;
             Timer.breakMsg = "Start Break"
             Timer.buttonMsg = "Reset Timer";
             Timer.timer = $interval(function () {
                 Timer.clock -= 1;
                 if(Timer.clock == 0) {
                     $interval.cancel(Timer.timer);
                     Timer.timerRunning = false;
                     Timer.buttonMsg = "Nice Work - Ready for Another Session?"
                     Timer.clock = 2;
                 }
             }.bind(this), 1000);
         }
         
         
         return Timer;
         

     }
  
     angular
         .module('blocTime')
         .factory('Timer', ['$interval', 'TIMES', Timer]);
 })();