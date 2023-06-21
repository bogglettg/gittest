const calender = document.querySelector("#calender");

function getCalender() {
    const date = new Date();
    const years = String(date.getFullYear()).padStart(4, "0");
    const month = String(date.getMonth()).padStart(2, "0");
    const days = String(date.getDay()).padStart(2, "0");
    calender.innerText = `${years}년 ${month}월 ${days}일`;
}

getCalender();
setInterval(getCalender, 1000);
