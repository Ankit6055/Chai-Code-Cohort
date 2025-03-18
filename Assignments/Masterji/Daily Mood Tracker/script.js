const loggedMoods = [{Time: "12-09-2024", moodEmoji: "😊", mood: "Happy", Notes: "I was really happy"}];

document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.querySelector(".date-input");
    const moodBtn = document.querySelectorAll(".mood-btn");
    const notesArea = document.querySelector(".notes-area");

    const saveMood = document.getElementById("save-mood");
    const clearForm = document.getElementById("clear-form");

    dateInput.addEventListener("change", (e) => {
        const selectedDate = e.target.value;
    })

    moodBtn.forEach((button) => {
        button.addEventListener("click", () => {
            const moodValue = button.getAttribute('data-mood');
            const mood = button.textContent;
        })        
    })

    saveMood.addEventListener("click", () => {
        const dateValue = dateInput.value;
        const moodValue = 
        dayNoteValue = notesArea.value;
    })

})

