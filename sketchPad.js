//Canvas Script
const Canvas = document.getElementById("draw");
let ctx;
let x;
let y;
let color = 'red';
let lastX = 0;
let lastY = 0;
const radius = 1;
let drawing = false;
const colorArray = [`rgb(255, 0, 0)`,`rgb(0, 255, 0)`,`rgb(0, 0, 255)`];

const rect = Canvas.getBoundingClientRect();
const scaleX = Canvas.width / rect.width;
const scaleY = Canvas.height /rect.height;
const offsetX = rect.left;
const offsetY = rect.top;


function drawingTracker(){
    //this.Canvas.style.cursor = "none"; //hide cursor
    ctx = Canvas.getContext("2d");
    window.addEventListener('mousedown', function (e) {
        drawing = true;
        [lastX,lastY] = [(e.clientX - offsetX) * scaleX, (e.clientY - offsetY) * scaleY];
        updateDrawing(e, color)
    })
    
    window.addEventListener('mousemove', function(e){
        if(drawing == true){updateDrawing(e)}
    })

    window.addEventListener('mouseup', function (e) {
        drawing = false;
        ctx.closePath();
    })
    
    //For touch screens or drawing pads
    window.addEventListener('touchstart', function (e) {
        drawing = true;
        [lastX,lastY] = [(e.clientX - offsetX) * scaleX, (e.clientY - offsetY) * scaleY];
        updateDrawing(e, color)
    })
    window.addEventListener('touchend', function (e) {
        drawing = false;
        ctx.closePath();
    })
}

function updateDrawing(e){
    let [x,y] = [(e.clientX - offsetX) * scaleX, (e.clientY - offsetY) * scaleY];
    ctx = Canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = 2 * radius;

    //Drawing Process
    console.log(`${color} color ${x} ${y}`)
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
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
            //console.log(color = allColors[i].style.backgroundColor);
            color = allColors[i].style.backgroundColor;
            changeBack = document.querySelectorAll(".color");
            for(let z =0; z< changeBack.length;z++){
                changeBack[z].style.opacity = 0.75;
                changeBack[z].style.border = "2px solid black";
            }
            allColors[i].style.opacity = 1;
            allColors[i].style.border = "2px solid white";
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