// hold shift, alt and down arrow -- for duplicate
// Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo (event) {
    // prevent form from submitting or refreshing
    event.preventDefault();

    // todo-div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create-li --append
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    // input random value 
    newTodo.innerText = todoInput.value;
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
    // clear input value after entering text
    todoInput.value = "";
}

function deleteCheck (e) {
   const item = e.target;
   // delete todo
   if (item.classList[0] === "trash-btn") {
       // delete parentElement of item for complete removal
       const todo = item.parentElement;
       todo.remove();
   }

   // check mark 
   if (item.classList[0] === "complete-btn") {
       const todo = item.parentElement;
       todo.classList.toggle("completed");
       console.log(todo.item);
   }
}
