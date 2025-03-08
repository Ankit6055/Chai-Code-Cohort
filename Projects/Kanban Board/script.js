// DOM Elements
const addTaskButtons = document.querySelectorAll('.add-task-button');
const addTaskBtn = document.querySelector('.add-task-btn');
const clearBoardBtn = document.querySelector('.clear-board-btn');
const allTasks = document.querySelectorAll('.task-list');
const modalOverlay = document.getElementById('modalOverlay');
const confirmDialog = document.getElementById('confirmDialog');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const cancelBtn = document.querySelector('.cancel-btn');
const addTaskInColumn = document.querySelector('.add-task-in-column');
const taskStatusInput = document.getElementById('taskStatus');
const taskTitleInput = document.getElementById('taskTitle');
const taskTagsInput = document.getElementById('taskTags');
const editTaskIdInput = document.getElementById('editTaskId');
const deleteTaskIdInput = document.getElementById('deleteTaskId');
const confirmDialogCancel = document.querySelector('.confirm-dialog-cancel');
const confirmDialogConfirm = document.querySelector('.confirm-dialog-confirm');

// Task counter for generating unique IDs
let taskCounter = 10; // Starting from 10 since we already have 9 tasks

// Local Storage Functions
function saveTasksToLocalStorage() {
    try {
        console.log('Saving tasks to local storage');
        
        const columns = document.querySelectorAll('.column');
        const boardData = {};
        
        columns.forEach(column => {
            const columnId = column.classList[1]; // 'todo', 'doing', or 'done'
            const tasks = [];
            
            column.querySelectorAll('.task').forEach(task => {
                try {
                    const taskId = task.getAttribute('data-task-id');
                    
                    // Get priority from task classes first (most reliable)
                    let status = null;
                    if (task.classList.contains('Urgent')) status = 'Urgent';
                    else if (task.classList.contains('High')) status = 'High';
                    else if (task.classList.contains('Medium')) status = 'Medium';
                    
                    // If no class found, try to get from status element
                    if (!status) {
                        const statusElement = task.querySelector('.task-status');
                        if (statusElement && statusElement.innerText) {
                            status = statusElement.innerText.trim();
                        }
                    }
                    
                    // Default to Urgent if still no status
                    if (!status) status = 'Urgent';
                    
                    const titleElement = task.querySelector('.task-title');
                    const title = titleElement ? titleElement.innerText : 'Untitled Task';
                    
                    const tags = Array.from(task.querySelectorAll('.task-tag'))
                        .map(tag => tag.innerText);
                    
                    // Get timestamp from the task
                    const datetimeElement = task.querySelector('.task-datetime');
                    let timestamp = '';
                    if (datetimeElement) {
                        // Get the text content
                        const datetimeText = datetimeElement.textContent || datetimeElement.innerText;
                        // Clean up the timestamp text (remove icon and "updated" text)
                        timestamp = datetimeText.replace(/\(updated\)/g, '').trim();
                        
                        // Remove the icon part if present (everything before the actual time)
                        const timeMatch = timestamp.match(/\d+:\d+\s+[AP]M,\s+\d{2}-\d{2}-\d{4}/);
                        if (timeMatch) {
                            timestamp = timeMatch[0];
                        }
                    }
                    
                    // Validate priority
                    const validPriorities = ['Urgent', 'High', 'Medium'];
                    let validStatus = status;
                    if (!validStatus || !validPriorities.includes(validStatus)) {
                        console.log("Invalid priority when saving:", validStatus);
                        validStatus = 'Urgent'; // Default to Urgent if invalid
                    }
                    
                    console.log(`Saving task: ${title} with priority: ${validStatus}`);
                    
                    tasks.push({
                        id: taskId,
                        status: validStatus,
                        title,
                        tags,
                        timestamp
                    });
                } catch (err) {
                    console.error('Error processing task for saving:', err);
                }
            });
            
            boardData[columnId] = tasks;
        });
        
        // Save the highest task counter value
        boardData.taskCounter = taskCounter;
        
        // Save to local storage
        localStorage.setItem('kanbanBoardData', JSON.stringify(boardData));
        console.log('Tasks saved to local storage successfully');
    } catch (error) {
        console.error('Error saving to local storage:', error);
    }
}

function loadTasksFromLocalStorage() {
    try {
        const savedData = localStorage.getItem('kanbanBoardData');
        if (!savedData) {
            console.log('No saved tasks found in local storage');
            // Save the initial tasks if no data exists
            saveInitialTasksToLocalStorage();
            return;
        }
        
        console.log('Loading tasks from local storage');
        
        let boardData;
        try {
            boardData = JSON.parse(savedData);
            console.log('Parsed board data:', boardData);
        } catch (parseError) {
            console.error('Error parsing board data:', parseError);
            localStorage.removeItem('kanbanBoardData');
            saveInitialTasksToLocalStorage();
            return;
        }
        
        // Clear existing tasks
        document.querySelectorAll('.task-list').forEach(list => {
            list.innerHTML = '';
        });
        
        // Restore task counter
        if (boardData.taskCounter) {
            taskCounter = boardData.taskCounter;
        }
        
        // Load tasks for each column
        Object.keys(boardData).forEach(columnId => {
            if (columnId === 'taskCounter') return; // Skip the counter property
            
            const column = document.querySelector(`.column.${columnId}`);
            if (!column) return;
            
            const taskList = column.querySelector('.task-list');
            if (!taskList) return;
            
            console.log(`Loading tasks for column: ${columnId}`);
            
            if (!Array.isArray(boardData[columnId])) {
                console.error(`Invalid tasks array for column ${columnId}`);
                return;
            }
            
            boardData[columnId].forEach(taskData => {
                try {
                    if (!taskData) {
                        console.error('Empty task data');
                        return;
                    }
                    
                    // Validate priority
                    const validPriorities = ['Urgent', 'High', 'Medium'];
                    let status = taskData.status;
                    
                    // Ensure status is a string
                    if (typeof status !== 'string') {
                        console.log("Non-string priority:", status);
                        status = String(status || '').trim();
                    } else {
                        status = status.trim();
                    }
                    
                    // Check if it's a valid priority
                    if (!status || !validPriorities.includes(status)) {
                        console.log("Invalid priority in loaded task:", status);
                        status = 'Urgent'; // Default to Urgent if invalid
                    }
                    
                    // Validate title
                    const title = taskData.title || 'Untitled Task';
                    
                    // Validate tags
                    let tags = [];
                    if (Array.isArray(taskData.tags)) {
                        tags = taskData.tags;
                    } else if (typeof taskData.tags === 'string') {
                        tags = taskData.tags.split(',').map(t => t.trim());
                    }
                    
                    console.log(`Loading task: ${title} with priority: ${status}`);
                    
                    // Create task with validated data
                    const task = createTaskElement(
                        status,
                        title,
                        tags.join(', '),
                        taskData.id,
                        taskData.timestamp
                    );
                    
                    // Ensure the task has the correct priority class
                    task.classList.remove('Urgent', 'High', 'Medium');
                    task.classList.add(status);
                    
                    // Ensure the status element has the correct priority class
                    const statusElement = task.querySelector('.task-status');
                    if (statusElement) {
                        statusElement.classList.remove('Urgent', 'High', 'Medium');
                        statusElement.classList.add(status);
                        statusElement.innerText = status;
                    }
                    
                    taskList.appendChild(task);
                } catch (err) {
                    console.error('Error creating task element:', err, taskData);
                }
            });
        });
        
        // Update column counts
        updateColumnCounts();
        console.log('Tasks loaded from local storage successfully');
    } catch (error) {
        console.error('Error loading from local storage:', error);
        // If there's a critical error, clear local storage and start fresh
        localStorage.removeItem('kanbanBoardData');
        saveInitialTasksToLocalStorage();
    }
}

// Function to save the initial tasks that are in the HTML
function saveInitialTasksToLocalStorage() {
    console.log('Saving initial tasks to local storage');
    
    // Check if there are any tasks in the DOM
    const tasks = document.querySelectorAll('.task');
    
    if (tasks.length > 0) {
        console.log(`Found ${tasks.length} initial tasks to save`);
        
        // Fix any priority issues in the initial tasks
        tasks.forEach(task => {
            // Check if the task has a priority class
            const hasPriority = ['Urgent', 'High', 'Medium'].some(priority => 
                task.classList.contains(priority)
            );
            
            if (!hasPriority) {
                // Add default priority class if missing
                task.classList.add('Urgent');
                
                // Also fix the status element if it exists
                const statusElement = task.querySelector('.task-status');
                if (statusElement) {
                    // Remove any existing priority classes
                    statusElement.classList.remove('Urgent', 'High', 'Medium');
                    // Add default priority class
                    statusElement.classList.add('Urgent');
                    // Set the text
                    statusElement.innerText = 'Urgent';
                }
            }
        });
        
        // Save the fixed tasks
        saveTasksToLocalStorage();
    } else {
        console.log('No initial tasks found to save');
    }
}

// Function to clear all tasks from the board
function clearBoard() {
    try {
        console.log('Clearing board...');
        
        // Clear all task lists
        document.querySelectorAll('.task-list').forEach(list => {
            list.innerHTML = '';
        });
        
        // Reset task counter
        taskCounter = 10;
        
        // Clear local storage
        localStorage.removeItem('kanbanBoardData');
        
        // Update column counts
        updateColumnCounts();
        
        // Show success toast
        showToast('Board has been reset', 'info');
        
        // Reload the page to restore initial tasks from HTML
        // Use a small timeout to ensure the toast is shown
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } catch (error) {
        console.error('Error clearing board:', error);
        showToast('Error clearing board', 'error');
    }
}

// Function to show confirmation dialog for clearing the board
function showClearBoardConfirmation() {
    // Update confirmation dialog text
    const dialogTitle = confirmDialog.querySelector('h3');
    const dialogText = confirmDialog.querySelector('p');
    const confirmButton = confirmDialog.querySelector('.confirm-dialog-confirm');
    
    dialogTitle.innerText = 'Reset Board';
    dialogText.innerText = 'Are you sure you want to reset the board? This will delete all tasks and cannot be undone.';
    confirmButton.innerText = 'Reset';
    
    // Set a custom attribute to identify the action
    confirmDialog.setAttribute('data-action', 'clear-board');
    
    // Show the dialog
    confirmDialog.style.display = 'block';
}

// Drag and Drop Functionality
document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('task')) {
        e.target.classList.add('dragging');
    }
});

document.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('task')) {
        e.target.classList.remove('dragging');
        // Show toast notification when task is moved
        showToast('Task moved successfully!', 'success');
        // Save to local storage after moving
        saveTasksToLocalStorage();
    }
});

allTasks.forEach((taskContainer) => {
    taskContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        taskContainer.classList.add('drag-over');
        
        // Get the dragging task
        const draggingTask = document.querySelector('.dragging');
        if (!draggingTask) return;
        
        // Get the task that the dragging task is hovering over
        const taskAfterDraggingTask = getTaskAfterDraggingTask(taskContainer, e.clientY);
        
        // Insert the dragging task before the task after it
        if (taskAfterDraggingTask) {
            taskContainer.insertBefore(draggingTask, taskAfterDraggingTask);
        } else {
            taskContainer.appendChild(draggingTask);
        }
    });

    taskContainer.addEventListener('dragleave', () => {
        taskContainer.classList.remove('drag-over');
    });

    taskContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        taskContainer.classList.remove('drag-over');
        updateColumnCounts();
    });
});

// Helper function to determine where to insert the dragging task
function getTaskAfterDraggingTask(container, yPosition) {
    // Get all tasks in the container that are not being dragged
    const tasks = [...container.querySelectorAll('.task:not(.dragging)')];
    
    // Find the first task that is below the dragging task
    return tasks.reduce((closest, task) => {
        const box = task.getBoundingClientRect();
        const offset = yPosition - box.top - box.height / 2;
        
        // If the offset is negative, the task is below the dragging task
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: task };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Format date as "4:20 PM, 07-03-2025"
function formatDateTime(date) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${hours}:${minutes} ${ampm}, ${month}-${day}-${year}`;
}

// Function to update task count in each column
function updateColumnCounts() {
    document.querySelectorAll('.column').forEach((column) => {
        const taskContainer = column.querySelector('.task-list');
        const countElement = column.querySelector('.column-count');
        countElement.innerText = taskContainer.children.length;
    });
}

// Function to show toast notification
function showToast(message, type = 'info') {
    toastMessage.textContent = message;
    toast.className = 'toast';
    toast.classList.add(`toast-${type}`);
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Function to create a new task element
function createTaskElement(status, title, tag, taskId, timestamp) {
    // Validate priority and ensure it's one of the allowed values
    const validPriorities = ['Urgent', 'High', 'Medium'];
    
    // Ensure status is a string and trim it
    if (typeof status !== 'string') {
        console.log("Non-string priority:", status);
        status = String(status).trim();
    } else {
        status = status.trim();
    }
    
    // Check if it's a valid priority
    if (!status || !validPriorities.includes(status)) {
        console.log("Invalid priority in createTaskElement:", status);
        status = 'Urgent'; // Default to Urgent if invalid
    }
    
    console.log("Creating task with priority:", status);
    
    const taskElement = document.createElement('div');
    taskElement.classList.add('task', 'task-creating');
    // Add the priority class separately to ensure it's applied correctly
    taskElement.classList.add(status);
    taskElement.setAttribute('draggable', 'true');
    taskElement.setAttribute('data-task-id', taskId || `task-${taskCounter++}`);
    
    // Create task actions
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('task-action-btn', 'edit-btn');
    editBtn.setAttribute('title', 'Edit task');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.addEventListener('click', handleEditTask);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task-action-btn', 'delete-btn');
    deleteBtn.setAttribute('title', 'Delete task');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', handleDeleteTask);
    
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);
    
    // Create task status
    const statusElement = document.createElement('div');
    statusElement.classList.add('task-status');
    // Add the priority class separately to ensure it's applied correctly
    statusElement.classList.add(status);
    statusElement.innerText = status;
    
    // Create task title
    const titleElement = document.createElement('div');
    titleElement.classList.add('task-title');
    titleElement.innerText = title || 'Untitled Task';
    
    // Create task tags
    const tagElement = document.createElement('div');
    tagElement.classList.add('task-tags');
    
    // Split tags by comma and create a span for each
    const tags = tag ? tag.split(',').map(t => t.trim()) : [];
    tags.forEach(tagText => {
        if (tagText) {
            const tagSpan = document.createElement('span');
            tagSpan.classList.add('task-tag');
            tagSpan.innerText = tagText;
            tagElement.appendChild(tagSpan);
        }
    });
    
    // Create timestamp element
    const dateElement = document.createElement('div');
    dateElement.classList.add('task-datetime');
    
    // Use provided timestamp or create a new one
    let timeValue;
    if (timestamp && timestamp.trim() !== '') {
        timeValue = timestamp;
    } else {
        const now = new Date();
        timeValue = formatDateTime(now);
    }
    
    dateElement.innerHTML = `<i class="far fa-clock"></i> ${timeValue}`;
    
    // Append all elements to task
    taskElement.appendChild(taskActions);
    taskElement.appendChild(statusElement);
    taskElement.appendChild(titleElement);
    taskElement.appendChild(tagElement);
    taskElement.appendChild(dateElement);
    
    // Add double-click event to mark task as complete
    taskElement.addEventListener('dblclick', () => {
        if (taskElement.closest('.column.done')) {
            taskElement.classList.add('task-complete');
            setTimeout(() => {
                taskElement.classList.remove('task-complete');
            }, 1000);
            showToast('Task completed! 🎉', 'success');
        }
    });
    
    return taskElement;
}

// Function to show modal with animation
function showModal() {
    modalOverlay.style.display = 'flex';
    // Trigger reflow to ensure the transition works
    void modalOverlay.offsetWidth;
    modalOverlay.classList.add('show');
    
    // Focus on the first input field
    setTimeout(() => {
        taskTitleInput.focus();
    }, 100);
}

// Function to hide modal with animation
function hideModal() {
    modalOverlay.classList.remove('show');
    // Wait for the transition to complete before hiding
    setTimeout(() => {
        modalOverlay.style.display = 'none';
    }, 300);
}

// Function to handle edit task
function handleEditTask(e) {
    const taskElement = e.currentTarget.closest('.task');
    const taskId = taskElement.getAttribute('data-task-id');
    const statusElement = taskElement.querySelector('.task-status');
    const taskStatus = statusElement ? statusElement.innerText.trim() : 'Urgent';
    const taskTitle = taskElement.querySelector('.task-title').innerText;
    const taskTags = Array.from(taskElement.querySelectorAll('.task-tag'))
        .map(tag => tag.innerText)
        .join(', ');
    
    console.log("Editing task with priority:", taskStatus);
    
    // Set the task ID first
    editTaskIdInput.value = taskId;
    
    // Set the title and tags
    taskTitleInput.value = taskTitle;
    taskTagsInput.value = taskTags;
    
    // Reset the priority dropdown to default first
    taskStatusInput.value = 'Urgent';
    
    // Set the priority by selecting the matching option
    let priorityFound = false;
    
    // First try exact match
    for (let i = 0; i < taskStatusInput.options.length; i++) {
        if (taskStatusInput.options[i].value === taskStatus) {
            taskStatusInput.selectedIndex = i;
            priorityFound = true;
            console.log("Priority matched exactly:", taskStatus);
            break;
        }
    }
    
    // If no exact match, try case-insensitive match
    if (!priorityFound) {
        for (let i = 0; i < taskStatusInput.options.length; i++) {
            if (taskStatusInput.options[i].value.toLowerCase() === taskStatus.toLowerCase()) {
                taskStatusInput.selectedIndex = i;
                priorityFound = true;
                console.log("Priority matched case-insensitive:", taskStatus);
                break;
            }
        }
    }
    
    // If still no match, default to first option
    if (!priorityFound) {
        console.log("No priority match found, defaulting to first option");
        taskStatusInput.selectedIndex = 0;
    }
    
    // Change button text
    addTaskInColumn.innerText = 'Update Task';
    
    // Show modal with animation
    showModal();
}

// Function to handle delete task
function handleDeleteTask(e) {
    const taskElement = e.currentTarget.closest('.task');
    const taskId = taskElement.getAttribute('data-task-id');
    
    // Set task ID to delete
    deleteTaskIdInput.value = taskId;
    
    // Show confirmation dialog
    confirmDialog.style.display = 'block';
}

// Add event listeners to existing edit and delete buttons
document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', handleEditTask);
});

document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', handleDeleteTask);
});

// Handle add task button click (navbar)
addTaskBtn.addEventListener('click', () => {
    // Reset form
    taskStatusInput.selectedIndex = 0; // Set to first option (Urgent)
    taskTitleInput.value = '';
    taskTagsInput.value = '';
    editTaskIdInput.value = '';
    
    // Change button text
    addTaskInColumn.innerText = 'Add Task';
    
    // Show modal with animation
    showModal();
});

// Handle add task button click (column)
addTaskButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Reset form
        taskStatusInput.selectedIndex = 0; // Set to first option (Urgent)
        taskTitleInput.value = '';
        taskTagsInput.value = '';
        editTaskIdInput.value = '';
        
        // Change button text
        addTaskInColumn.innerText = 'Add Task';
        
        // Show modal with animation
        showModal();
    });
});

// Handle cancel button click
cancelBtn.addEventListener('click', () => {
    // Hide modal with animation
    hideModal();
});

// Handle add/update task button click
addTaskInColumn.addEventListener('click', () => {
    // Get form values and trim them
    const taskStatus = taskStatusInput.value ? taskStatusInput.value.trim() : 'Urgent';
    const taskTitle = taskTitleInput.value ? taskTitleInput.value.trim() : '';
    const taskTags = taskTagsInput.value ? taskTagsInput.value.trim() : '';
    const editTaskId = editTaskIdInput.value;
    
    console.log("Form submission - Priority:", taskStatus);
    
    // Validate form
    if (taskTitle === '') {
        showToast('Please enter a task title', 'error');
        return;
    }
    
    // Validate priority
    const validPriorities = ['Urgent', 'High', 'Medium'];
    if (!validPriorities.includes(taskStatus)) {
        console.log("Invalid priority selected:", taskStatus);
        showToast('Invalid priority selected, using Urgent instead', 'warning');
        // Set to default priority
        taskStatusInput.selectedIndex = 0;
    }
    
    // Get the final priority value (in case it was reset above)
    const finalPriority = taskStatusInput.value;
    
    // If editing existing task
    if (editTaskId) {
        const taskElement = document.querySelector(`[data-task-id="${editTaskId}"]`);
        if (taskElement) {
            console.log(`Updating task: ${taskTitle} with priority: ${finalPriority}`);
            
            // Update task priority class - first remove all priority classes
            taskElement.classList.remove('Urgent', 'High', 'Medium');
            // Then add the new priority class
            taskElement.classList.add(finalPriority);
            
            // Update task status element
            const statusElement = taskElement.querySelector('.task-status');
            if (statusElement) {
                // Remove all priority classes
                statusElement.classList.remove('Urgent', 'High', 'Medium');
                // Add the new priority class
                statusElement.classList.add(finalPriority);
                // Update the text
                statusElement.innerText = finalPriority;
            }
            
            // Update task title
            const titleElement = taskElement.querySelector('.task-title');
            if (titleElement) {
                titleElement.innerText = taskTitle;
            }
            
            // Update tags
            const tagElement = taskElement.querySelector('.task-tags');
            if (tagElement) {
                tagElement.innerHTML = '';
                
                if (taskTags) {
                    const tags = taskTags.split(',').map(t => t.trim());
                    tags.forEach(tagText => {
                        if (tagText) {
                            const tagSpan = document.createElement('span');
                            tagSpan.classList.add('task-tag');
                            tagSpan.innerText = tagText;
                            tagElement.appendChild(tagSpan);
                        }
                    });
                }
            }
            
            // Update timestamp
            const dateElement = taskElement.querySelector('.task-datetime');
            if (dateElement) {
                const now = new Date();
                const timeValue = formatDateTime(now);
                dateElement.innerHTML = `<i class="far fa-clock"></i> ${timeValue} (updated)`;
            } else {
                const dateElement = document.createElement('div');
                dateElement.classList.add('task-datetime');
                const now = new Date();
                const timeValue = formatDateTime(now);
                dateElement.innerHTML = `<i class="far fa-clock"></i> ${timeValue}`;
                taskElement.appendChild(dateElement);
            }
            
            // Show success toast
            showToast('Task updated successfully!', 'success');
            
            // Save to local storage
            saveTasksToLocalStorage();
        }
    } else {
        // Create new task with current timestamp
        const newTask = createTaskElement(finalPriority, taskTitle, taskTags);
        
        // Add to first column (To Do)
        const todoColumn = document.querySelector('.column.todo .task-list');
        todoColumn.appendChild(newTask);
        
        // Show success toast
        showToast('Task added successfully!', 'success');
        
        // Save to local storage
        saveTasksToLocalStorage();
    }
    
    // Update column counts
    updateColumnCounts();
    
    // Hide modal with animation
    hideModal();
});

// Handle confirmation dialog cancel button click
confirmDialogCancel.addEventListener('click', () => {
    // Hide confirmation dialog
    confirmDialog.style.display = 'none';
});

// Handle confirmation dialog confirm button click
confirmDialogConfirm.addEventListener('click', () => {
    const action = confirmDialog.getAttribute('data-action');
    
    if (action === 'clear-board') {
        // Clear the board
        clearBoard();
    } else {
        // Default action: delete task
        const taskId = deleteTaskIdInput.value;
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        
        if (taskElement) {
            // Add deletion animation
            taskElement.classList.add('task-deleting');
            
            // Remove task after animation completes
            setTimeout(() => {
                taskElement.remove();
                updateColumnCounts();
                showToast('Task deleted successfully!', 'info');
                
                // Save to local storage after deletion
                saveTasksToLocalStorage();
            }, 300);
        }
    }
    
    // Hide confirmation dialog
    confirmDialog.style.display = 'none';
    // Reset the action attribute
    confirmDialog.removeAttribute('data-action');
});

// Initialize column counts
updateColumnCounts();

// Add keyboard support for the form
document.addEventListener('keydown', (e) => {
    // If modal is visible
    if (modalOverlay.style.display === 'flex') {
        // Enter key to submit form
        if (e.key === 'Enter' && !e.ctrlKey) {
            e.preventDefault();
            addTaskInColumn.click();
        }
        
        // Escape key to close modal
        if (e.key === 'Escape') {
            hideModal();
        }
        
        // Tab key to cycle through form fields
        if (e.key === 'Tab') {
            const focusableElements = modalOverlay.querySelectorAll('button, input, select');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            // If shift+tab and focus is on first element, move to last element
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
            
            // If tab and focus is on last element, move to first element
            if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
    
    // If confirmation dialog is visible
    if (confirmDialog.style.display === 'block') {
        // Enter key to confirm
        if (e.key === 'Enter') {
            e.preventDefault();
            confirmDialogConfirm.click();
        }
        
        // Escape key to cancel
        if (e.key === 'Escape') {
            confirmDialog.style.display = 'none';
        }
    }
    
    // Ctrl+N to add new task (only if modal is not visible)
    if (e.ctrlKey && e.key === 'n' && modalOverlay.style.display !== 'flex') {
        e.preventDefault();
        addTaskBtn.click();
    }
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        hideModal();
    }
    
    if (e.target === confirmDialog) {
        confirmDialog.style.display = 'none';
    }
});

// Prevent clicks inside the modal from closing it
document.querySelector('.modal').addEventListener('click', (e) => {
    e.stopPropagation();
});

document.querySelector('.confirm-dialog').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Handle clear board button click
clearBoardBtn.addEventListener('click', () => {
    showClearBoardConfirmation();
});

// Load tasks from local storage when the page loads
window.addEventListener('load', () => {
    loadTasksFromLocalStorage();
});