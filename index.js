window.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector('#todo-input');
    const addButton = document.querySelector('#add-button');
    const todoList = document.querySelector('#todo-list');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === "") {
            alert('Please Enter the task');
            return;
        }

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todoText;

        const action = document.createElement('div');
        action.className = 'action';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => editTodo(li, span));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(li));

        action.appendChild(editButton);
        action.appendChild(deleteButton);

        li.appendChild(span);
        li.appendChild(action);
        todoList.appendChild(li);
        todoInput.value = '';
    }

    function deleteTodo(li) {
        todoList.removeChild(li);
    }

    function editTodo(li, span) {
        const newText = prompt('Enter your Task', span.textContent);
        if (newText !== null) {
            span.textContent = newText.trim();
        }
    }
});
