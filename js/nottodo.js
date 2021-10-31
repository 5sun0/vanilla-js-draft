const notTodoForm = document.getElementById("not-todo-form");
const notTodoInput = notTodoForm.querySelector("input");
const notTodoButton = notTodoForm.querySelector("button");
const notTodoList = document.getElementById("not-todo-list");

let notTodos = [];

const NOT_TODOS_KEY = "notTodos";

function saveNotTodos(){
    localStorage.setItem(NOT_TODOS_KEY, JSON.stringify(notTodos));
}

function deleteNotTodo(event){
    const li = event.target.parentElement;
    li.remove();

    notTodos = notTodos.filter((notTodo) => notTodo.id !== parseInt(li.id));
    saveNotTodos();
}

function paintNotTodo(newNotTodo){
    const li = document.createElement("li");
    li.id = newNotTodo.id;
    const span = document.createElement("span");
    span.innerText = newNotTodo.text;

    li.appendChild(span);

    span.addEventListener("click", deleteNotTodo);
    notTodoList.appendChild(li);
}

function handleNotTodoSubmit(event){
    event.preventDefault();
    const newNotTodo = notTodoInput.value;
    notTodoInput.value = "";
    const newNotTodoObj = {
        text: newNotTodo,
        id: Date.now()
    };
    notTodos.push(newNotTodoObj);
    paintNotTodo(newNotTodoObj);
    saveNotTodos();
}

notTodoButton.addEventListener("click", handleNotTodoSubmit);

const savedNotTodos = localStorage.getItem(NOT_TODOS_KEY);

if(savedNotTodos !== null){
    const parsedNotTodos = JSON.parse(savedNotTodos);
    notTodos = parsedNotTodos;
    parsedNotTodos.forEach(paintNotTodo);
}