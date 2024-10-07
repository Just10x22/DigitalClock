function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    // Set session (AM/PM)
    session.innerHTML = hrs >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    if (hrs > 12) {
        hrs = hrs - 12;
    } else if (hrs === 0) {
        hrs = 12; // Midnight case
    }

    // Zero-pad hours, minutes, and seconds
    hrs = hrs < 10 ? '0' + hrs : hrs;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    // Display time
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

// Update the time every second (1000ms)
setInterval(displayTime, 1000);
