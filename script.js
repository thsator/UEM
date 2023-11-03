// Set the target date and time for the countdown (YYYY-MM-DD HH:MM:SS format)
const targetDate = new Date("2023-11-04T17:00:00").getTime();

// Update the countdown every second
const timer = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Time's up!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById("countdown").innerHTML = countdownText;
    }
}, 1000);
