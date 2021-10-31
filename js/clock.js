const today = document.querySelector("#clock span:first-child");
const clock = document.querySelector("#clock span:last-child");

function getClock(){
    const date = new Date();
    const years = date.getFullYear();
    const month = date.getMonth();
    const days = date.getDay();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    today.innerText = `${years}.${month}.${days}`;
    clock.innerText = `${hours}:${minutes}`;
}

getClock();

setInterval(getClock, 60000);