 (function() {
     function LandingCtrl($firebaseArray, $interval, Timer) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
                  
         var mySound = new buzz.sound( "/sounds/ding.mp3", {
            preload: true
         });
         
         this.timer = Timer;
         
        }   
     
     angular
         .module('blocTime')
         .controller('LandingCtrl', ['$firebaseArray', '$interval', 'Timer', LandingCtrl]);
 })();