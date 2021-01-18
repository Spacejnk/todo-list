// hold shift, alt and down arrow -- for duplicate
// Selectors from HTML
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event listeners 
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo (event) {
    // prevent form from submitting or refreshing
    event.preventDefault();

    // todo-div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create-li --append
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    // input random value 
    todoDiv.appendChild(newTodo);

    // Add todo to localstorage
    saveLocalTodos(todoInput.value);

    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton); 

    // Append todoDiv to UL list
    todoList.appendChild(todoDiv);
    // clear input value after entering text
    todoInput.value = "";
}

function deleteCheck (e) {
   const item = e.target;
   // delete todo
   if (item.classList[0] === "trash-btn") {
       // delete parentElement of item for complete removal
       const todo = item.parentElement;
       // add class todo Animation 
       todo.classList.add("fall");
       // remove todos func
       removeLocalTodos(todo)
       todo.addEventListener("transitioned", function(){
        todo.remove();
       });
       
   }

   // check mark 
   if (item.classList[0] === "complete-btn") {
       const todo = item.parentElement;
       // todo toggle undo delete 
       todo.classList.toggle("completed");
   }
}

// filterTodo completed and unpcompleted with switch and loop target select opt value 
function filterTodo(e) { 
const todos = todoList.childNodes;
todos.forEach(function(todo) {
    switch (e.target.value) {
        case "all":
            todo.style.display = "flex";
            break;
        case "completed":
            if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
            break;
        case "uncompleted":
             if (!todo.classList.contains("completed")) {
                 todo.style.display = "flex";
             } else {
                 todo.style.display = "none";
             }
             break;
        }
    });
}

// saving todos in localstorage
function saveLocalTodos(todo) {
    // check for todos if not there then add them
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
} 

function getTodos() {
    // check for todos if not there then add them
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function(todo) {
  // todo-div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // create-li --append
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add('todo-item');
  // input random value 
  todoDiv.appendChild(newTodo);

  // Check Mark Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  // Check Trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton); 

  // Append todoDiv to UL list
  todoList.appendChild(todoDiv);

    });
}

// remove todos items individually
function removeLocalTodos(todo) {
      // check for todos if not there then add them
      let todos;
      if (localStorage.getItem('todos') === null) {
          todos = [];
      } else {
          todos = JSON.parse(localStorage.getItem('todos'))
      }

      const todoIndex = todo.children[0].innerText;
      todos.splice(todos.indexOf(todoIndex), 1);
      localStorage.setItem('todos', JSON.stringify(todos));
}
// localStorage.clear();