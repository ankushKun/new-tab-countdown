// DOM Elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const countdownLabelElement = document.querySelector('.countdown-label');

// Calculate the next upcoming year
function getNextYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear + 1;
}

// Set the date we're counting down to (January 1 of next year)
const nextYear = getNextYear();
const countdownDate = new Date(`January 1, ${nextYear} 00:00:00`).getTime();

// Update the countdown label to just show the year number
countdownLabelElement.textContent = "till " + nextYear.toString();

// Update countdown every second
function updateCountdown() {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format with leading zeros
    daysElement.textContent = days.toString().padStart(3, '0') + "d";
    hoursElement.textContent = hours.toString().padStart(2, '0') + "h";
    minutesElement.textContent = minutes.toString().padStart(2, '0') + "m";
    secondsElement.textContent = seconds.toString().padStart(2, '0') + "s";
}

// Initialize countdown and update every second
updateCountdown();
setInterval(updateCountdown, 1000); 