const days = document.getElementById("days");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const seconds = document.getElementById("seconds");

const formatTime = (time) => {
    return time < 10? `0${time}` : time;
}

const updateCountDown = (deadline) => () => {
    const currentTime = new Date();
    const timeLeft = deadline - currentTime;

    //calculate the time left
    let calSeconds = Math.floor(timeLeft / 1000) % 60;
    let calMinutes = Math.floor(timeLeft / 1000 / 60) % 60;
    let calHours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    let calDays = Math.floor(timeLeft / 1000 / 60 / 60 / 24);

    days.textContent = formatTime(calDays);
    hours.textContent = formatTime(calHours);
    minutes.textContent = formatTime(calMinutes);
    seconds.textContent = formatTime(calSeconds);
}

const countDown = (targetDate) => {
setInterval(updateCountDown(targetDate), 1000);
}

const targetDate = new Date("February 27 2024 7:00");
countDown(targetDate);
