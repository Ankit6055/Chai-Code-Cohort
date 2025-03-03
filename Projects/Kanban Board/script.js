const addTaskButton = document.querySelectorAll('.add-task-button');
// const todo = document.querySelector('.todo');

addTaskButton.forEach((button) => {
    button.addEventListener('click', () => {
        const taskStatus = prompt("Enter the Status of Task");
        const taskTitle = prompt("Enter the Title of Your Task");
        const taskTag = prompt("Enter the Task Tag");

        const taskList = document.createElement('div');
        taskList.classList.add('task'); 
        taskList.setAttribute('draggable', 'true');

        const statusElement = document.createElement('div');
        statusElement.classList.add('task-status');
        statusElement.innerText = taskStatus;

        const titleElement = document.createElement('div');
        titleElement.classList.add('task-title');
        titleElement.innerText = taskTitle;

        const tagElement = document.createElement('div');
        tagElement.classList.add('task-tags');
        
        const tagSpan = document.createElement('span'); 
        tagSpan.classList.add('task-tag');
        tagSpan.innerText = taskTag;

        tagElement.appendChild(tagSpan);

        taskList.appendChild(statusElement);
        taskList.appendChild(titleElement);
        taskList.appendChild(tagElement);

        // Find the nearest `.task-list` container
        const column = button.closest('.column'); // Find the column where the button was clicked
        const taskContainer = column.querySelector('.task-list'); 

        taskContainer.appendChild(taskList);  


        const columnCount = document.querySelectorAll('.column-count');
        columnCount.forEach((elem) => {
            elem.textContent = parseInt(elem.innerText) + 1;
            console.log(elem.innerText);
        })
    });
});