// Get all values
const searchParams = new URLSearchParams(window.location.search);


// get "timer" value. Default to 15 seconds.
if (searchParams.has('timer')) {
    console.log(searchParams.get('timer'));
    timeLeft = searchParams.get('timer');
} else {
    timeLeft = "15";
}

// Get "message" value. Default to "Ads Running:"
if (searchParams.has('message')) {
    console.log(searchParams.get('message'));
    message = searchParams.get('message');
    } else {
    message = "Ads Running:";
}

// Run the countdown
function countdown() {
    // Subtract from time left
    timeLeft--;
    // Set the initial message how you want it to look.
    document.getElementById("message").innerHTML = String( message ) + "<br /> " + String(timeLeft);
    
    // If the timer still has time left, run it. Otherwise, hide it.
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    } else {
        document.getElementById("message").innerHTML = "" ;
    }
    
    // If the timer is less than 11 seconds, set to #00FFFF
    if (timeLeft < 11) {     
        document.getElementById('message').style.color = '#00FFFF';
    }
};

// Run the whole goddamn thing.
setTimeout(countdown, 1000);