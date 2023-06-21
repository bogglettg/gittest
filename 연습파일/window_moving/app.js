function windowResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 720) {
        document.body.style.backgroundColor = "tomato";
    } else if (windowWidth > 720 && windowWidth >= 1080) {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "blue";
    }
}

window.addEventListener("resize", windowResize);
