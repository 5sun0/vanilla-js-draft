const ddaySubmit = document.querySelector("#dday-submit");

const ddayTitle = ddaySubmit.querySelector("#dday-title input");

const ddayForm = ddaySubmit.querySelector("#dday-form");
const ddayDate = ddayForm.querySelector("input");
const submitButton = ddayForm.querySelector("button");

const ddayPainted = document.querySelector("#dday-painting");

function submitDday(e){
    e.preventDefault();

    const title = ddayTitle.value;
    const date = ddayDate.value;

    ddaySubmit.classList.toggle(HIDDEN_CLASSNAME);

    localStorage.setItem("title", title);
    localStorage.setItem("date", date);

    paintingDday(title, date);
}

function getDdayTimer(date){
    
    const secondSpan = ddayPainted.querySelector("span:last-child");

    const dday = new Date(`${date}`);
    const ddayYear = dday.getFullYear();
    const ddayMonth = dday.getMonth()+1;
    const ddayDay = dday.getDate();

    const now = new Date();
    const gap = dday - now;
    const days = Math.ceil(gap / (1000 * 60 * 60 * 24));

    console.log(ddayMonth);

    if (days > 0){
        secondSpan.innerText = `D-${days} until ${ddayYear}.${ddayMonth}.${ddayDay}`;
    } else if (days === 0){
        secondSpan.innerText = `D-Day!`;
    } else if (days < 0){
        secondSpan.innerText = `+${Math.abs(days)} after ${ddayYear}.${ddayMonth}.${ddayDay}`;
    }

    console.log(secondSpan);
}

function paintingDday(title, date){
    const firstSpan = ddayPainted.querySelector("span:first-child");
    firstSpan.innerText = `${title}`;

    getDdayTimer(date);
    setInterval(getDdayTimer, 1000 * 60 * 60 * 24);

    const resetButton = document.createElement("button");

    resetButton.id = "reset-button";
    resetButton.innerText = "Reset";
    ddayPainted.appendChild(resetButton);

    ddayPainted.classList.toggle(HIDDEN_CLASSNAME);

    resetButton.addEventListener("click", deleteDday);
}

function deleteDday(){
    localStorage.removeItem("title");
    localStorage.removeItem("date");

    ddayPainted.classList.toggle(HIDDEN_CLASSNAME);
    ddaySubmit.classList.toggle(HIDDEN_CLASSNAME);

    ddayForm.addEventListener("submit", submitDday);
}

const savedDdayTitle = localStorage.getItem("title");
const savedDdayDate = localStorage.getItem("date");

if (savedDdayDate === null || savedDdayTitle === null){
    ddaySubmit.classList.toggle(HIDDEN_CLASSNAME);
    ddayForm.addEventListener("submit", submitDday);
} else {
    paintingDday(savedDdayTitle, savedDdayDate);
}