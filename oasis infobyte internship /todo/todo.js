const addTodoBtn = document.getElementById('add-todo');
const newTodoInput = document.getElementById('new-todo');
const todoList = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', function() {
    const newTodo = newTodoInput.value;
    if (newTodo) {
        const newLi = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList.add('delete-todo');
        newLi.innerHTML = newTodo;
        newLi.appendChild(deleteBtn);
        todoList.appendChild(newLi);
        newTodoInput.value = '';
    }
});

todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-todo')) {
        event.target.parentNode.remove();
    }
});
newTodoInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTodoBtn.click();
    }
});
