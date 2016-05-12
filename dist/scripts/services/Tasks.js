(function() {
  function Tasks($firebaseArray) {
      var ref = new Firebase("https://shining-heat-4055.firebaseio.com/");
      
      var TasksHolder = {};
      
      TasksHolder.tasks = $firebaseArray(ref) 
  
      TasksHolder.addTask = function() {
          TasksHolder.tasks.$add({
              text: TasksHolder.newTaskText
          });
      }
  
      return TasksHolder;
  
  }
  
  angular
    .module('blocTime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();