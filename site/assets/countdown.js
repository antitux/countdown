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
    message = "A Thing Happened";
}

if (searchParams.has('cursor')) {
    console.log(searchParams.get('cursor'));
    cursorCharacters = searchParams.get('cursor');
    } else {
        cursorCharacters = "."
    }

if (searchParams.has('speed')) {
    console.log(searchParams.get('speed'));
    cursorSpeed = searchParams.get('speed');
} else {
    cursorSpeed = "250"
}

// Run the countdown
function countdown() {
    // Subtract from time left
    timeLeft--;
    // Set the initial message how you want it to look.
    document.getElementById("message").innerHTML = String(message) + '<br />' + String(timeLeft);

    if (cursorCharacters) {
        document.getElementById("message").innerHTML = String(message) + '<span id="cursor">&nbsp</span><br />' + String(timeLeft);
        document.getElementById("cursor").innerHTML = String(cursorCharacters);
        if (cursorSpeed) {
            var speed = String(cursorSpeed);
        } else {
            var speed = 500;
        }
        var cursorStatus = 0;
        setInterval(() => {
            if(cursorStatus == 0) {
                document.getElementById('cursor').style.opacity = 0;
                cursorStatus = 1;
            } else if (cursorStatus == 1) {
                document.getElementById('cursor').style.opacity = 1;
                cursorStatus = 0;
            }
        }, speed);
    }
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