 (function() {
     function LandingCtrl($firebaseArray, $interval) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
         
         this.clock = 1500;
         
         var interval = $interval(function () {
             this.clock -= 1;
         }.bind(this), 1000);
         
     }
 
     angular
         .module('blocTime')
         .controller('LandingCtrl', ['$firebaseArray', '$interval', LandingCtrl]);
 })();