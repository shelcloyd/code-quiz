function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    console.log(timer);
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        console.log(minutes);
        seconds = parseInt(timer % 60, 10);
        console.log(seconds);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let fiveMinutes = 60 * 10,
        display = document.querySelector('#countdown');
    startTimer(fiveMinutes, display);
};


