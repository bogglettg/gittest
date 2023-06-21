// <⚠️ DONT DELETE THIS ⚠️>
const title = document.querySelector("h1");
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const superEventHandler = {
    mouseEnter: function () {
        title.innerText = "Mouse is here";
        title.style.color = colors[0];
    },
    mouseLeave: function () {
        title.innerText = "Mouse leave";
        title.style.color = colors[1];
    },
    windowResize: function () {
        title.innerText = "You just resized";
        title.style.color = colors[2];
    },
    rightClick: function () {
        title.innerText = "That was right click!";
        title.style.color = colors[3];
    },
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.rightClick);
