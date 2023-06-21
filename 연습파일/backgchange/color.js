const btnId = document.querySelector("#ccbtn");
const backGround = document.querySelector("body");

const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34",
];

function changeBtn() {
    const changeColor1 = colors[Math.floor(Math.random() * colors.length)];
    const changeColor2 = colors[Math.floor(Math.random() * colors.length)];
    backGround.style.backgroundImage = `linear-gradient(180deg,${changeColor1}, ${changeColor2})`;
    btnId.style.backgroundImage = `linear-gradient(180deg,${changeColor2}, ${changeColor1})`;
}

btnId.addEventListener("click", changeBtn);
