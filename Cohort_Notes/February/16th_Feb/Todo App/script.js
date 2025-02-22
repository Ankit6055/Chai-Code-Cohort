const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoItemsContainer = document.getElementById('todo-items-container');

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    const li = document.createElement('li');
    li.innerText = value;

    const delbutton = document.createElement('button');
    delbutton.innerText = 'X';
    delbutton.addEventListener('click', () => {
        li.remove();
    })
    li.appendChild(delbutton);

    todoItemsContainer.appendChild(li);
    todoInput.value = '';
})