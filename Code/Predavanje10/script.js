// 1. spisak gdje cuvamo biljeske
var todoList = [];
var notes = document.querySelector('#notes');
var id = 0;

// 2. dodavanje biljeske
function addTodo(title, desc, priority) {
  var todo = {
    id: ++id,
    title: title,
    desc: desc,
    priority: priority
  };
  todoList.push(todo);
}
addTodo('Sejo', 'hehehe.', 3);
addTodo('Suljo', 'Kupi mlijeko.', 3);
addTodo('Mujo', 'Kupi jaja.', 3);
addTodo('Kupi hljeb', 'De fakat kupi.', 1);
addTodo('Meho', 'Kupi hljeb.', 2);

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

function addUrgentTodo(title, desc) {
  var todo = {
    id: ++id,
    title: title,
    desc: desc,
    priority: 1
  };
  todoList.unshift(todo);
}
addUrgentTodo('Fata kupi mlijeko', 'lkdjsajdlksajd');

function sortAscending() {
  todoList.sort(function (todo1, todo2) {
    return todo1.priority - todo2.priority;
  });
}
sortAscending();

////////////////////////////////////////////////

// RENDERING !!!

function renderAllNotes() {
  todoList.forEach(function (note, i) {

    var li = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', function (e) {
      removeTodo(note.id);
      li.remove();
    });

    var editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function (e) {

      var restore = li.innerHTML;
      li.innerHTML = '';
      var inputTitle = document.createElement('input');
      var inputDesc = document.createElement('input');
      var saveButton = document.createElement('button');
      saveButton.innerText = 'Save';
      var cancelButton = document.createElement('button');
      cancelButton.innerText = 'Cancel';

      cancelButton.addEventListener('click', function (e) {
        li.innerHTML = restore;
      });
      saveButton.addEventListener('click', function (e) {
        var innerDeleteButton = document.createElement('button');
        innerDeleteButton.innerText = 'X';
        innerDeleteButton.addEventListener('click', function (e) {
          removeTodo(note.id);
          li.remove();
        });
        li.innerText = inputTitle.value + '\n\n' + inputDesc.value + '\n\n';
        li.appendChild(innerDeleteButton);        
      });

      li.appendChild(inputTitle);
      li.appendChild(inputDesc);
      li.appendChild(cancelButton);
      li.appendChild(saveButton);
    });

    li.innerText = note.title + '\n\n' + note.desc + '\n\n';
    li.appendChild(button);
    li.appendChild(editButton);
    notes.appendChild(li);

  });
}
renderAllNotes();

var button = document.getElementById('add-note');
button.addEventListener('click', function (e) {
  var title = document.getElementById('note-title');
  var desc = document.getElementById('note-desc');

  // poziv na addTodo
  addTodo(title.value, desc.value, 1);

  var li = document.createElement('li');
  var button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', function (e) {
    removeTodo(id);
    li.remove();
  });
  li.innerText = title.value + '\n\n' + desc.value + '\n\n';
  li.appendChild(button);
  notes.appendChild(li);
});


console.log(todoList);


console.log(
  notes.children[3]
);





// function rememberTo(task) {
//   todoList.push(task);
// }
// function whatIsNext() {
//   return todoList.shift();
// }
// function urgentlyRememberTo(task) {
//   todoList.unshift(task);
// }
// function remove(array, index) {
//   return array.slice(0, index).concat(array.slice(index + 1));
// }