(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
         
         $stateProvider
         .state('landing', {
             url: '/',
             controller: 'LandingCtrl as landing',
             templateUrl: '/templates/landing.html'
         });
     }
     
     angular
        .module('blocTime', ['ui.router', 'firebase'])
        .constant("TIMES", {
         "WORK_SESSION": 1500,
         "SHORT_BREAK": 300,
         "LONG_BREAK": 1800
     })
        .config(config);
 })();