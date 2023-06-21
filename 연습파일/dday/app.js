const dDay = document.querySelector("#dday");

function dDayCounnter() {
    const christmas = new Date("2023-12-25");
    const date = new Date();
    const UntillDD = christmas - date;
    const untilDay = Math.floor(UntillDD / (1000 * 60 * 60 * 24));
    const untilHour = Math.floor((UntillDD / (1000 * 60 * 60)) % 24);
    const untilMinutes = Math.floor((UntillDD / (1000 * 60)) % 60);
    const untilSecond = Math.floor((UntillDD / 1000) % 60);
    dDay.innerText = `${untilDay}d ${untilHour}h ${untilMinutes}m ${untilSecond}s`;
}

setInterval(dDayCounnter, 1000);
