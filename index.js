setInterval(() => {
    // Create Date
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    hourDegrees = 30*hours + minutes/2;
    minutesDegrees = 6*minutes;
    secondsDegrees = 6*seconds;

    hour.style.transform = `rotate(${hourDegrees}deg)`;
    minute.style.transform = `rotate(${minutesDegrees}deg)`;
    second.style.transform = `rotate(${secondsDegrees}deg)`;

}, 1000);