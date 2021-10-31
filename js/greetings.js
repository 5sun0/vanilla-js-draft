const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function deleteUsername(){
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function paintGreetings(username){
    const hours = new Date().getHours();
    const button = document.createElement("button");
    
    button.id = "logout-button";
    button.innerText = "Rename";
    
    
    let hello;

    if (hours > 6 && hours <= 11){
        hello = "Good Morning";
    } else if (hours > 12 && hours <= 16){
        hello = "Hi Hello";
    } else if (hours > 17 && hours <= 22){
        hello = "Good Evening";
    } else {
        hello = "Good Night";
    }

    greeting.innerText = `${hello}, ${username}!`;
    greeting.appendChild(button);
    greeting.classList.remove(HIDDEN_CLASSNAME);

    button.addEventListener("click", deleteUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}