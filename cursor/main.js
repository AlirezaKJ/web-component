let cursor = document.getElementById("cursor")
let mousepos = document.getElementById("mousepos")


const moveCursor = (e) => {

    const mouseY = e.clientY;
    const mouseX = e.clientX;
     
    cursor.style.visibility = "visible"
    cursor.style.transform = `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`;

    mousepos.innerText = `X: ${mouseX} Y: ${mouseY}`
   
}

window.addEventListener('mouseout',() => cursor.style.visibility = "hidden")
window.addEventListener('mousemove', moveCursor)