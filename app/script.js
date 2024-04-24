// Counter function
function startCounter() {
    // Initial count
    let count = 0;

    // Update counter every 200 milliseconds (adjust as needed)
    const intervalId = setInterval(() => {
        count++;
        document.getElementById('counter').innerText = count;

        // Stop the counter when it reaches 30
        if (count >= 30) {
            clearInterval(intervalId);
        }
    }, 100); // Update interval in milliseconds (adjust as needed)
}

// Start the counter when the page loads
window.onload = startCounter;

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}


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
