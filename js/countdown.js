function startTimer() {
    var currentYear = (new Date).getTime();

    var newYear = new Date("2018-01-01T00:00:00.000Z"); // 2018
    //var newYear = (new Date()).setTime(1483225200000); // 2017
    //var newYear = (new Date()).setTime(1451602800000); // 2016

    var today = new Date();

    var oneDay = 1000 * 60 * 60 * 24;
    var difference = Math.abs(today - newYear);
    daysLeft = Math.floor(difference / oneDay);
    var hoursLeft = 23 - today.getHours() + (daysLeft * 24);
    var minutesLeft = 59 - today.getMinutes();
    var secondsLeft = 59 - today.getSeconds();

    if (currentYear >= newYear) {
        document.getElementById('countdown-chars').innerHTML = "HAPPY NEW YEAR!";
    } else {
        var hours = 0;
        if (hours > 99) {
            if (hours > 999) {
                hours = wrapChars(hoursLeft, -4);
            } else {
                hours = wrapChars(hoursLeft, -3);
            }
        } else {
            hours = wrapChars(hoursLeft, -2);
        }

        var minutes = wrapChars(minutesLeft, -2);

        var seconds = wrapChars(secondsLeft, -2);

        document.getElementById('countdown-chars').innerHTML =
        hours + ":" +
        minutes + ":" +
        seconds;
    }
}

function wrapChars(string, maxDigits) {
    string = (Math.pow(10, Math.abs(maxDigits)) + string.toString()).slice(maxDigits);
    return string;
}

setInterval("startTimer()", 999);
