 (function() {
     function LandingCtrl($scope, $firebaseArray) {
         var ref = new Firebase("https://shining-heat-4055.firebaseio.com/")
     }
 
     angular
         .module('blocTime')
         .controller('LandingCtrl', [$scope, $firebaseArray, LandingCtrl]);
 })();