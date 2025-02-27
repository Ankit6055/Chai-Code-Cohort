const accordion = document.querySelectorAll('.accordion');
const accordionItem = document.querySelectorAll('.accordion-item');
const accordionButton = document.querySelectorAll('.accordion-button');
const accordionContent = document.querySelectorAll('.accordion-content');

accordionItem.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('active')){
            e.classList.remove('active');
        }
        else {
            const accIsActive = document.querySelectorAll('.active');
            accIsActive.forEach((el) => {
                el.classList.remove('active');
            })
            e.classList.add('active');
        }
    });
});