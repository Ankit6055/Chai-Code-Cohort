const addTaskButtons = document.querySelectorAll('.add-task-button');
const allTasks = document.querySelectorAll('.task-list');

// Drag and Drop Functionality
document.addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging');
});

document.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
});

allTasks.forEach((taskContainer) => {
    taskContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        taskContainer.classList.add('drag-over'); // Visual feedback
    });

    taskContainer.addEventListener('dragleave', () => {
        taskContainer.classList.remove('drag-over');
    });

    taskContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        taskContainer.classList.remove('drag-over');
        const draggingTask = document.querySelector('.dragging');
        if (draggingTask) {
            taskContainer.appendChild(draggingTask);
            updateColumnCounts();
        }
    });
});

// Function to update task count in each column
function updateColumnCounts() {
    document.querySelectorAll('.column').forEach((column) => {
        const taskContainer = column.querySelector('.task-list');
        const countElement = column.querySelector('.column-count');
        countElement.innerText = taskContainer.children.length;
    });
}

// Handling Add Task Button Click
addTaskButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const formBox = document.getElementById('modalOverlay');
        formBox.style.display = 'flex';
        formBox.classList.add('modal-overlay');

        const cancelBtn = document.querySelector('.cancel-btn');

        cancelBtn.addEventListener('click', () => {
            document.getElementById('taskStatus').value = '';
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskTags').value = '';
            formBox.style.display = 'none';
        });

        const newAddTaskBtn = document.querySelector('.add-task-in-column');

        newAddTaskBtn.addEventListener('click', () => {
            const taskStatus = document.getElementById('taskStatus').value.trim();
            const taskTitle = document.getElementById('taskTitle').value.trim();
            const taskTag = document.getElementById('taskTags').value.trim();

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

            const column = button.closest('.column');

            const taskContainer = column.querySelector('.task-list');

            taskContainer.appendChild(taskList);

            updateColumnCounts();

            formBox.style.display = 'none';
            document.getElementById('taskStatus').value = '';
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskTags').value = '';
        });
    });
});
