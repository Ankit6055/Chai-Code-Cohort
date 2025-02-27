function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDegree = ((hours % 12) + minutes / 60) * 30;
    const minuteDegree = (minutes + seconds / 60) * 6;
    const secondDegree = seconds * 6;
  
    document.querySelector(".hour").style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;
    document.querySelector(".minute").style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
    document.querySelector(".second").style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
  
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    document.querySelector(".digital-clock").textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.querySelector(".date").textContent = now.toLocaleDateString("en-US", options);
  }
  

function addClockNumbers() {
    const clock = document.querySelector(".clock");
    const radius = 140; 
    const centerX = clock.clientWidth / 2;
    const centerY = clock.clientHeight / 2;
  
    for (let i = 1; i <= 12; i++) {
      const numberElement = document.createElement("div");
      numberElement.classList.add("number");
      numberElement.textContent = i;
  
      const angle = (i * 30) * (Math.PI / 180);
      const x = centerX + radius * Math.sin(angle);
      const y = centerY - radius * Math.cos(angle);
  
      numberElement.style.left = `${x}px`;
      numberElement.style.top = `${y}px`;
      clock.appendChild(numberElement);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    addClockNumbers();
    updateClock();
    setInterval(updateClock, 1000);
  });
  