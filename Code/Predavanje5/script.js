// 1. spisak gdje cuvamo biljeske
var todoList = [];

// 2. dodavanje biljeske
function addTodo(id, title, desc, priority) {
  var todo = {
    id: id,
    title: title,
    desc: desc,
    priority: priority
  };
  todoList.push(todo);
}
addTodo(3, 'Mujo', 'lkdsjadlksadj.', 3);
addTodo(3, 'Mujo', 'lkdsjadlksadj.', 3);
addTodo(3, 'Mujo', 'lkdsjadlksadj.', 3);
addTodo(1, 'Kupi hljeb', 'De fakat kupi.', 1);
addTodo(2, 'Meho', 'lkdsjadlksadj.', 2);

function editTodo(id, title, desc, priority) {
  todoList.forEach(function (todo) {
    if (todo.id === id) {
      todo.title = title;
      todo.desc = desc;
      todo.priority = priority;
    }
  });
}

editTodo(1, 'Suljo hoce da kuci hljeb', 'Fakat hoce.', 1);

function removeTodo(id) {
  for (var i = 0; i < todoList.length; i++) {
    if (id === todoList[i].id) {
      todoList.splice(i, 1);
      break;
    }
  }
}
removeTodo(2);

function addUrgentTodo(id, title, desc) {
  var todo = {
    id: id,
    title: title,
    desc: desc,
    priority: 1
  };
  todoList.unshift(todo);
}
addUrgentTodo(4, 'Fata kupi mlijeko', 'lkdjsajdlksajd');

function sortAscending() {
  todoList.sort(function(todo1, todo2) {
    return todo1.priority - todo2.priority;
  });
}
sortAscending();

console.log(todoList);











function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}