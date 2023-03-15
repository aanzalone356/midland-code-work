"use strict";
//! Once the page loads, create 4 divs of different styling and add them to the DOM. The styling should be built in the raw javascript and should have the following styles:
//!   - Div 1 - Red background with black border, 200px by 200px
//!   - Div 2 - Blue background, circular shape, 100px by 100px
//!   - Div 3 - Orange Border, white with red text that says: "Div 3" 150px by 100px
//!   - Div 4 - Fixed to the top, any color not taken for background and taking up the
//!     full width of the page.

function divAdder(){
    let div1 = document.createElement("div");
    div1.style.backgroundColor = "red";
    div1.style.border = "2px solid black";
    div1.innerHTML = "Hi";
    div1.style.height = "200px";
    div1.style.width = "200px";
    document.body.appendChild(div1);
    console.log(div1);


    let div2 = document.createElement("div");
    div2.style.backgroundColor = "blue";
    //circular shape
    div2.innerHTML = "Hello";
    div2.style.height = "100px";
    div2.style.width = "100px";
    document.body.appendChild(div2);
    console.log(div2);


    let div3 = document.createElement("div");
    div3.style.color = "red";
    div3.style.border = "2px solid orange";
    div3.innerHTML = "Div 3";
    div3.style.height = "100px";
    div3.style.width = "150px";
    document.body.appendChild(div3);
    console.log(div3);


    let div4 = document.createElement("div");
    div4.style.backgroundColor = "green";
    div4.style.position = "fixed";
    div4.style.top = "0";
    div4.style.left = "0";
    div4.innerHTML = "Good Afternoon";
    div4.style.width = "100%";
    document.body.appendChild(div4);
    console.log(div4);
}

document.addEventListener("DOMContentLoaded", function() {
    divAdder();
});

console.log(document.getElementsByName("div"));