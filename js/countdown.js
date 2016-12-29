function startTimer() {
    var today = new Date();

    var hoursLeft = 23 - today.getHours();
    var minutesLeft = 59 - today.getMinutes();
    var secondsLeft = 59 - today.getSeconds();

    if (Math.floor(secondsLeft) <= 0 && Math.floor(minutesLeft) <= 0 && Math.floor(hoursLeft) <= 0) {
        document.getElementById('countdown-chars').innerHTML = "00:00:00";
    }
    else {
        document.getElementById('countdown-chars').innerHTML =
        wrapChars(hoursLeft, -2) + ":" +
        wrapChars(minutesLeft, -2) + ":" +
        wrapChars(secondsLeft, -2);
    }

    setTimeout('startTimer()', 999);
}

function wrapChars(string, maxDigits) {
    string = (Math.pow(10, Math.abs(maxDigits)) + string.toString()).slice(maxDigits);
    return string;
}

startTimer();
