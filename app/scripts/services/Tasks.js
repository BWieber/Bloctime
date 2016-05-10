(function() {
  function Tasks($firebaseArray) {
      var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
      
      var tasks = $firebaseArray(ref);

      return {
        all: tasks
      };
  }
  
  angular
    .module('blocTime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();