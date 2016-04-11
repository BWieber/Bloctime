(function() {
     function TimerCtrl($firebaseArray, $interval) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/")
         
         this.clock = "25:00";
         
     }
 
     angular
         .module('blocTime')
         .controller('TimerCtrl', TimerCtrl);
 })();