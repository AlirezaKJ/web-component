let chartel = document.getElementById("chart")
let chartBars = document.querySelectorAll("#chart .bar")

console.log(chartBars.length)


// PY Range Function In JS
function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        stop = start;
        start = 0;
    }
    if (typeof step == 'undefined') {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};

function chartAnim() {
    var heightAmounts = []

    console.log(heightAmounts)

    for (i in range(chartBars.length)) {
        heightAmounts.push(Math.random() * chartel.offsetHeight)
    }

    var heightIndex = 0
    chartBars.forEach(element => {
        element.style.height = heightAmounts[heightIndex] + "px"
        heightIndex = heightIndex + 1
    });
}

setInterval(() => chartAnim(), 500)