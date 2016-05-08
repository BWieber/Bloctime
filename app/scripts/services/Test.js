 (function() {
     function Test($interval) {
         
         var Test = {};
         
         Test.msg = "This is a test."
         
         
         
         
        return Test;
         
        }
 
     angular
         .module('blocTime')
         .factory('Test', ['$interval', Test]); 
 })();