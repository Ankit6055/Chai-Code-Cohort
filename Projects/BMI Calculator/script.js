const ageIncrementButton = document.getElementById('age-increment');
const ageDecrementButton = document.getElementById('age-decrement');
const weightIncrementButton = document.getElementById('weight-increment');
const weightDecrementButton = document.getElementById('weight-decrement');
const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');

const age = document.getElementById('age-val');
const weight = document.getElementById('weight-val');
const bmiResult = document.getElementById('bmi-value');
const bmiType = document.getElementById('bmi-type');
const height = document.getElementById('heightValue');
const heightSlider = document.getElementById("height");

age.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        age.blur(); // Simulate clicking outside to trigger validation
    }
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
});

weight.addEventListener('keypress', (event) => {    
    if (event.key === 'Enter') {
        weight.blur(); // Simulate clicking outside to trigger validation
    }
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
});

heightSlider.addEventListener("input", () => {
    height.textContent = heightSlider.value;
});

height.addEventListener("blur", () => {
    let newValue = parseInt(height.textContent, 10);

    if (height.textContent.length === 0) {
        height.textContent = 0;
    }

    // Ensure the value is within the valid range (50 - 300)
    if (!isNaN(newValue) && newValue >= 50 && newValue <= 300) {
        heightSlider.value = newValue;
    } else {
        // Reset to slider's current value if input is invalid
        height.textContent = heightSlider.value;
    }
});

height.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        heightValue.blur(); // Simulate clicking outside to trigger validation
    }
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
});

ageDecrementButton.addEventListener('click', () => {   
    let currentAge = parseInt(age.innerText, 10); // Convert text to number
    if (currentAge > 0) {
        age.innerText = currentAge - 1; 
    }
});

ageIncrementButton.addEventListener('click', () => {
    let currentAge = parseInt(age.innerText, 10);
    if (currentAge > 0) {
        age.innerText = currentAge + 1; 
    }
});

weightDecrementButton.addEventListener('click', () => {
    let currentWeight = parseInt(weight.innerText, 10); 
    if (currentWeight > 0) {
        weight.innerText = currentWeight - 1; 
    }
});

weightIncrementButton.addEventListener('click', () => {
    let currentWeight = parseInt(weight.innerText, 10); 
    if (currentWeight > 0) {
        weight.innerText = currentWeight + 1; 
    }
});

clearButton.addEventListener('click', () => {
    age.innerText = 21;
    weight.innerText = 68;
    height.innerText = 180;
    bmiResult.innerText = 20.99;
    bmiType.innerText = "Normal weight";

    document.getElementById('height').value = 180;
    
    // Sync heightValue with the range input
    document.getElementById('heightValue').textContent = 180;

    // // If there's a BMI display, reset it too
    // bmiResult.innerText = "--"; 
    // bmiResult.style.color = "black";
    // bmiType.innerText = "";
    bmiResult.style.color = "#6c63ff";

    const gifImage = document.getElementById("gif-image");
    gifImage.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXZvdmRldjF2M2l2c2hzemFuZWIzNzJkYXR3ZWVkanJzY2Z5dmlxbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m8d64EAqfMGm5JbrTx/giphy.gif";
});

calculateButton.addEventListener('click', () => {

    const bmi = (parseInt(weight.innerText, 10) / Math.pow(parseInt(height.innerText, 10) / 100, 2)).toFixed(2);
    console.log(bmi);
    bmiResult.innerText = bmi;

    const gifImage = document.getElementById("gif-image");
    if (bmi < 18.5) {
        bmiResult.style.color = 'red';
        bmiType.innerText = 'Underweight';
        gifImage.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWdjMWE5a2p3NnZhbXlzN3duYzkxOTk4cWtkYzNoeWJwd2diM2V0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OaS5x2Ya1ZRIASEhko/giphy.gif";
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        bmiResult.style.color = 'green';
        bmiType.innerText = 'Normal weight';
        gifImage.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXZvdmRldjF2M2l2c2hzemFuZWIzNzJkYXR3ZWVkanJzY2Z5dmlxbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m8d64EAqfMGm5JbrTx/giphy.gif";
    }
    else if (bmi >= 25 && bmi < 29.9) {
        bmiResult.style.color = 'orange';
        bmiType.innerText = 'Overweight';
        gifImage.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW1zYWxiZGJxYXRvN25ubXpsY3J2MTY3ZmZhbHZ3b2I2aTdjbmFvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6vY59s91hWsxASYM/giphy.gif";
    }
    else {
        bmiResult.style.color = 'red';
        bmiType.innerText = 'Obese';
        gifImage.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHg4NXBrNGVocjM3N2o2NnhuYmE4NHRqZDE1NnE0NG91MW41bDhxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wOjQ7aKWQ4vBK/giphy.gif";
    }

    if (window.innerWidth <= 768) {
        document.querySelector('.calc-box2').scrollIntoView({ behavior: 'smooth' });
    }
});