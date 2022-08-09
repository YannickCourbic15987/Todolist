const todoButton = document.querySelector("#todoButton");
const todoInput = document.querySelector("#todoInput");
const containerTask = document.querySelector("#containerTask");
const form = document.querySelector("#form");

let tabTask = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let txt = todoInput.value.trim();
  addTodo(txt);
});

//ajouter todo
function addTodo(txt) {
  let todo = {
    txt,
    id: Date.now(),
  };

  displayTodo(todo);
}

function displayTodo(todo) {
  const containerTodo = document.createElement("div");
  containerTask.appendChild(containerTodo);
  containerTodo.innerHTML = todo.txt;
  containerTodo.className = "todo";
  addBtnMod(containerTodo);
  addBtnSup(containerTodo);
  addBtnEnd(containerTodo);
}
