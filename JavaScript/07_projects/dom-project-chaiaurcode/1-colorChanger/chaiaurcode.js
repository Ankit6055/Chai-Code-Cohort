// const grey = document.getElementById('grey');
// const white = document.getElementById('white');
// const blue = document.getElementById('blue');
// const yellow = document.getElementById('yellow');

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === "grey") {
            document.body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "white") {
            document.body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "blue") {
            document.body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "yellow") {
            document.body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "purple") {
            document.body.style.backgroundColor = e.target.id;
        }
    })
});