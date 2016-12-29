function startTimer() {
    var currentYear = (new Date).getTime();

    var newYear = (new Date()).setTime(1483225200000); // 2017
    //var newYear = (new Date()).setTime(1451602800000); // 2016

    var today = new Date();

    var hoursLeft = 23 - today.getHours();
    var minutesLeft = 59 - today.getMinutes();
    var secondsLeft = 59 - today.getSeconds();

    if (currentYear >= newYear) {
        document.getElementById('countdown-chars').innerHTML = "HAPPY NEW YEAR!";
    }
    else {
        document.getElementById('countdown-chars').innerHTML =
        wrapChars(hoursLeft, -2) + ":" +
        wrapChars(minutesLeft, -2) + ":" +
        wrapChars(secondsLeft, -2);
    }

    setInterval("startTimer()", 999);
}

function wrapChars(string, maxDigits) {
    string = (Math.pow(10, Math.abs(maxDigits)) + string.toString()).slice(maxDigits);
    return string;
}

startTimer();
