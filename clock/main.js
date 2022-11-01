let currsec = 0
let currmin = 0
let currhour = 0
let now;

let secbar = document.getElementById("secbar")
let minbar = document.getElementById("minbar")
let hourbar = document.getElementById("hourbar")

function updateClock() {
    now = new Date();
    currsec = now.getSeconds()
    currmin = now.getMinutes()
    currhour = now.getHours()

    secrotateamount = (currsec * 360) / 60  
    minrotateamount = (currmin * 360) / 60 
    hourrotateamount = (currhour * 720) / 24

    if (currsec == 0) {
        secbar.style.transition = "0s"
    } else {
        secbar.style.transition = "0.5s"
    }
    if (currmin == 0) {
        minbar.style.transition = "0s"
    } else {
        minbar.style.transition = "0.5s"
    }
    if (currhour == 0) {
        hourbar.style.transition = "0s"
    } else {
        hourbar.style.transition = "0.5s"
    }

    secbar.style.rotate = secrotateamount + 'deg'
    minbar.style.rotate = minrotateamount + 'deg'
    hourbar.style.rotate = hourrotateamount + 'deg'

    console.log(currsec)
    console.log(currmin)
    console.log(currhour)
}

setInterval(() => {
    updateClock()
}, 500);