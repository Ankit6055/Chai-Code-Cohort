const toggleButton = document.querySelector('.toggle-btn');
const panel = document.querySelector('.panel');
const closeButton = document.querySelector('.close-btn');
const menuItems = document.querySelectorAll('.menu-item'); // Fixed: Select all menu items

toggleButton.addEventListener('click', () => {
    panel.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    panel.classList.remove('active');
});

document.addEventListener('click', (event) => {
    if (!panel.contains(event.target) && !toggleButton.contains(event.target)) {
        panel.classList.remove('active');
    }
});

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        alert(`${event.target.textContent} is clicked!`);
        panel.classList.remove('active');
    });
});
