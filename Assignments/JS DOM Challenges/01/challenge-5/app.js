const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carousel = document.getElementById('carousel');
const carouselTrack = document.getElementById('carouselTrack');
const caption = document.getElementById('caption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carouselNav = document.getElementById('carouselNav');
const autoPlayButton = document.getElementById('autoPlayButton');
const timerDisplay = document.getElementById('timerDisplay');

let startIndex = 0;
let autoPlayInterval;
let timer = 5;

function addImageToCarousel(index) {
  carouselTrack.innerHTML = "";
  const imageToAdd = document.createElement('img');
  imageToAdd.classList.add('carousel-slide');
  imageToAdd.src = images[index].url;
  caption.innerText = images[index].caption;
  carouselTrack.appendChild(imageToAdd);
  updateIndicators();
}

nextButton.addEventListener('click', () => {
  startIndex = (startIndex + 1) % images.length;
  addImageToCarousel(startIndex);
  resetAutoPlay();
});

prevButton.addEventListener('click', () => {
  startIndex = (startIndex - 1 + images.length) % images.length;
  addImageToCarousel(startIndex);
  resetAutoPlay();
});

function createIndicators() {
  carouselNav.innerHTML = "";
  images.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("carousel-indicator");
    if (index === startIndex) indicator.classList.add("active");
    indicator.addEventListener("click", () => {
      startIndex = index;
      addImageToCarousel(startIndex);
      resetAutoPlay();
    });
    carouselNav.appendChild(indicator);
  });
}

function updateIndicators() {
  document.querySelectorAll(".carousel-indicator").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === startIndex);
  });
}

function startAutoPlay() {
  if (!autoPlayInterval) {
    autoPlayInterval = setInterval(() => {
      startIndex = (startIndex + 1) % images.length;
      addImageToCarousel(startIndex);
      timer = 5;
      updateTimerDisplay();
    }, 5000);
    autoPlayButton.innerText = "Stop Auto Play";
    updateTimerDisplay();
  }
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
  autoPlayButton.innerText = "Start Auto Play";
  timerDisplay.innerText = "";
}

function resetAutoPlay() {
  stopAutoPlay();
}

autoPlayButton.addEventListener("click", () => {
  autoPlayInterval ? stopAutoPlay() : startAutoPlay();
});

function updateTimerDisplay() {
  timerDisplay.style.display = "block";
  timerDisplay.innerText = `Next slide in ${timer}s`;
  let countdown = setInterval(() => {
    if (!autoPlayInterval) {
      timerDisplay.style.display = "none";
      clearInterval(countdown);
      return;
    }
    timer--;
    timerDisplay.innerText = `Next slide in ${timer}s`;
    if (timer <= 0) timer = 5;
  }, 1000);
}

createIndicators();
addImageToCarousel(startIndex);
