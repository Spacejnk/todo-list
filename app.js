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

}