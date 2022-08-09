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
  addBtnEnd(containerTodo, todo.id);
  addBtnMod(containerTodo, todo.id);
  addBtnSup(containerTodo, todo.id);
}

function addBtnEnd(containerTodo, id) {
  const btnEnd = document.createElement("button");
  containerTodo.appendChild(btnEnd);
  btnEnd.className = "btn";
  btnEnd.id = id;
  btnEnd.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
}
function addBtnMod(containerTodo, id) {
  const btnMod = document.createElement("button");
  containerTodo.appendChild(btnMod);
  btnMod.className = "btn";
  btnMod.id = id;
  btnMod.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
}
function addBtnSup(containerTodo, id) {
  const BtnSup = document.createElement("button");
  containerTodo.appendChild(BtnSup);
  BtnSup.className = "btn";
  BtnSup.id = id;
  BtnSup.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}
