// hold shift, alt and down arrow -- for duplicate
// Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event listeners 
todoButton.addEventListener('click', addTodo);

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
    newTodo.innerText = 'test';
    todoDiv.appendChild(newTodo);

    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('complete-btn');
    todoDiv.appendChild(trashButton);

    // Append todoDiv
    todoList.appendChild(todoDiv);



    console.log(todoDiv);

}