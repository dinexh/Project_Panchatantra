const slides = document.querySelectorAll('.slider img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });

    slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Define the target count for each box
const targetCounts = {
    treesPlantedCounter: 500,
    habitatsProtectedCounter: 500,
    carbonOffsetCounter: 500,
    communitiesEmpoweredCounter: 500
};

// Define the duration for the counter animation in milliseconds
const duration = 2000;

// Function to increment the counter for each box
const incrementCounter = (counterElement, targetCount, interval) => {
    let currentCount = 0; // Initialize current count

    const increment = () => {
        counterElement.innerText = currentCount.toLocaleString(); // Update the counter with the current count
        if (currentCount < targetCount) {
            currentCount++; // Increment the current count
            setTimeout(increment, interval); // Schedule the next increment
        }
    };

    // Start incrementing the counter
    increment();
};

// Update the counter for each box
Object.entries(targetCounts).forEach(([counterId, targetCount]) => {
    const counterElement = document.getElementById(counterId);
    const interval = Math.floor(duration / targetCount); // Calculate the interval for each count increment
    incrementCounter(counterElement, targetCount, interval);
});
