document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector('.todo-input');
    const addBtn = document.querySelector('.add-btn');
    const todoList = document.getElementById('todoList');

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <input type="checkbox" class="todo-checkbox">
            <span class="todo-text">${todoText}</span>
            <img src="verified.png" class="verified-icon" alt="Tamamlandı">
            <img src="trash.png" class="trash-icon" alt="Sil">
        `;

        const checkbox = todoItem.querySelector('.todo-checkbox');
        const trashIcon = todoItem.querySelector('.trash-icon');

        checkbox.addEventListener('change', () => {
            todoItem.classList.toggle('completed');
        });

        trashIcon.addEventListener('click', () => {
            todoItem.classList.add('fade-out');
            todoItem.addEventListener('animationend', () => {
                todoItem.remove();
            });
        });

        todoList.appendChild(todoItem);
        todoInput.value = '';
    }

    addBtn.addEventListener('click', addTodo);

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    document.querySelectorAll('.todo-item').forEach((todoItem) => {
        const checkbox = todoItem.querySelector('.todo-checkbox');
        const trashIcon = todoItem.querySelector('.trash-icon');

        checkbox.addEventListener('change', () => {
            todoItem.classList.toggle('completed');
        });

        trashIcon.addEventListener('click', () => {
            todoItem.classList.add('fade-out');
            todoItem.addEventListener('animationend', () => {
                todoItem.remove();
            });
        });
    });
});
