toDoApp.controller('ToDoController', function () {

  var self = this;

  self.todos = [{ text: "ToDo1", completed: true }, { text: "ToDo2", completed: false}];

  self.addToDo = function(todoText) {
    this.todos.push({ text: todoText, completed: false });
  };

  self.removeTodo = function() {
    self.todos.pop();
  };
});
