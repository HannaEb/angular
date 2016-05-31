toDoApp.controller('ToDoController', ['ToDoFactory', function (ToDoFactory) {

  var self = this;

  self.todos = [];

  self.addToDo = function(todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeTodo = function() {
    self.todos.pop();
  };
}]);
