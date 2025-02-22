function changeBackgroundBlack() {
    document.body.style.backgroundColor = 'black';
}

function changeBackgroundWhite() {
    document.body.style.backgroundColor = 'white';
}

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;

    if (!currentColor || currentColor === 'white') {
        changeBackgroundBlack();
        themeButton.innerText = 'Light Mode'
    }else {
        changeBackgroundWhite();
        themeButton.innerText = 'Dark Mode'
    }
})

// darkButton.addEventListener('click', () => {
//     changeBackgroundBlack('blue');
//     console.log("I got clicked");
// })