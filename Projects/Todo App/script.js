const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoItemByContainer = document.getElementById('todo-item-container');
const todoCompletedItemContainer = document.getElementById('todo-completed-output-container');

function completedTasks(value) {
    const li = document.createElement('li');
    li.innerText = value + " ✅";
    li.classList.add('todo-item');
    todoCompletedItemContainer.append(li);
}

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    if (value === "") {

    }
    else {
        const li = document.createElement('li');
        li.innerText = value;
        li.classList.add('todo-item');

        const buttonGroup = document.createElement('div'); // Create a div for buttons
        buttonGroup.classList.add('button-group');

        const submitButton = document.createElement('button');
        submitButton.innerText = "✅";
        submitButton.classList.add('submit-btn');
        const valueCompleted = li.innerText;
        submitButton.addEventListener('click', () => {
            completedTasks(valueCompleted);
            li.remove();
        })
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "❌";
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            li.remove();
        })
        
        const editButton = document.createElement('button');
        editButton.innerText = "✏️";
        editButton.classList.add('edit-btn');
        

// ************************************************

        // Append buttons inside button group div
        buttonGroup.appendChild(submitButton);
        buttonGroup.appendChild(deleteButton);
        buttonGroup.appendChild(editButton);

        // Append button group to li
        li.appendChild(buttonGroup);

        todoItemByContainer.appendChild(li);
        todoInput.value = "";
    }
})