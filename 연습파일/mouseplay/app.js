const title = document.querySelector("#title");
const heightOutput1 = document.querySelector("#height1");
const heightOutput2 = document.querySelector("#height2");
const widthOutput1 = document.querySelector("#width1");
const widthOutput2 = document.querySelector("#width2");

title.innerText = "got you";

function titleClicked() {
    title.style.color = "blue";
    title.innerText = "mouse clicked";
    console.log("hello");
}

function mouseEntering() {
    title.style.color = "red";
    title.innerText = "mouse is here";
    console.log("mouse entered");
}

function mouseLeaving() {
    title.style.color = "yellow";
    title.innerText = "mouse was here";
    console.log("mouse leave");
}

function windowResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 720) {
        document.body.style.backgroundColor = "blue";
    } else if (windowWidth > 720 && windowWidth <= 1080) {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "tomato";
    }
}

title.addEventListener("click", titleClicked);
title.addEventListener("mouseenter", mouseEntering);
title.addEventListener("mouseleave", mouseLeaving);

window.addEventListener("resize", windowResize);

//full size 1440, 239
