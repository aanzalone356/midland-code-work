//Canvas Script
let Canvas = document.getElementById("draw");
let ctx;
let refresh;
let x;
let y;
let color;
const radius = 1;
let colorArray = [`rgb(255, 0, 0)`,`rgb(0, 255, 0)`,`rgb(0, 0, 255)`];

function drawingTracker(){
    //this.Canvas.style.cursor = "none"; //hide cursor
    ctx = Canvas.getContext("2d");
    window.addEventListener('mousedown', function (e) {
        getMousePosition(Canvas, e);
        ctx.beginPath();
        refresh = setInterval(updateDrawing, 20);
      })
    window.addEventListener('mouseup', function (e) {
        x = false;
        y = false;
        ctx.closePath();
        clearInterval(refresh);
    })
    
    //For touch screens or drawing pads
    window.addEventListener('touchstart', function (e) {
        getMousePosition(Canvas, e);
        ctx.beginPath();
        refresh = setInterval(getMousePosition, 20);
    })
    window.addEventListener('touchend', function (e) {
        x = false;
        y = false;
        ctx.closePath();
        clearInterval(refresh);
    })
}

function getMousePosition(canvas, event){
    let rect = Canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,  "Coordinate y: " + y);
    updateDrawing(color,x,y);
}

function updateDrawing(color, x, y){
    x = x;
    y = y;
    color = color;
    ctx = Canvas.getContext("2d");// or ctx = Canvas.context
    ctx.fillStyle = color;
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
    
}


function addColor(colorValue){
    //Makes the slider Values into rgb values
    if(colorValue == true){
        let sliders = document.querySelectorAll(".slider");
        let curColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`
        colorArray.push(curColor); 
        //add div to div contianer right
        let newColor = document.createElement("div");
        newColor.classList.add("color");
        document.querySelector(".containerRight").appendChild(newColor);
    }
    
    let allColors = document.querySelectorAll(".color");
    for(let i = 0;i < allColors.length; i++){
        allColors[i].style.backgroundColor = colorArray[i];
        allColors[i].addEventListener('click', () => {
            updateDrawing(colorArray[i]);
            allColors[i].style.opacity = 1;
        })
    }
}


document.addEventListener("DOMContentLoaded", function() {
    addColor();
    let sliders = document.querySelectorAll(".slider");
    for(let i = 0; i < sliders.length; i++){
            sliders[i].addEventListener('mouseup', () => {
            document.getElementById("colorDisplay").style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`
        }) 
    }
    drawingTracker();
});