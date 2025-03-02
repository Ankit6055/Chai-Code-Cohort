const addTaskBtn = document.getElementById('add-task-btn');

const todoBoard = document.getElementById('todo-board');

addTaskBtn.addEventListener('click', () => {
    const input = prompt("What is the task?");
    if (!input) return;

    const taskcard = document.createElement('p');
    taskcard.classList.add('item');
    taskcard.setAttribute('draggable', true)
    taskcard.innerText = input;

    todoBoard.appendChild(taskcard);
})


const allBoards = document.querySelectorAll('.board');

allBoards.forEach((board) => {
    board.addEventListener('dragover', () => {
        console.log(board, 'kuch toh gaya')
    })
})