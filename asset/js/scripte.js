const todoButton = document.querySelector("#todoButton");
const todoInput = document.querySelector("#todoInput");
const containerTask = document.querySelector("#containerTask");
const form = document.querySelector("#form");
let tabId = [];


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
  todoInput.value = "";
  const containerTodo = document.createElement("div");
  containerTask.appendChild(containerTodo);
  containerTodo.className = "containerTodo";
  const textTodo = document.createElement('p');
  containerTodo.appendChild(textTodo);
  textTodo.innerHTML = todo.txt;
  textTodo.className = "todo";
  textTodo.id = todo.id;
  addBtnEnd(containerTodo, todo.id);
  addBtnMod(containerTodo, todo.id);
  addBtnSup(containerTodo, todo.id);

}

function addBtnEnd(containerTodo, id) {
  const btnEnd = document.createElement("button");
  containerTodo.appendChild(btnEnd);
  btnEnd.className = "btnEnd";
  btnEnd.id = id;
  btnEnd.addEventListener('click', finishTask)
  btnEnd.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
  tabId.push(id);
 
   
  
}

// console.log(tabId);
function addBtnMod(containerTodo, id) {
  const btnMod = document.createElement("button");
  containerTodo.appendChild(btnMod);
  btnMod.className = "btnMod";
  btnMod.id = id;
  btnMod.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  btnMod.addEventListener('click',updateTask);
  

 

}
function addBtnSup(containerTodo, id) {
  const BtnSup = document.createElement("button");
  containerTodo.appendChild(BtnSup);
  containerTodo.id = "containerTodo";
  BtnSup.className = "btnRemove";
  BtnSup.id = id;
  BtnSup.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  BtnSup.addEventListener('click' , removeTask);
}
function finishTask(e){
let task = e.path[2].children[0];
// console.log(e.path[2].children[0].innerHTML);
if(task.classList.contains('todo')){
  // alert('test')
  task.classList.toggle('lineThrough');
}
}

function removeTask(e){
  if(e.path[2].className = "containerTodo"){
    e.path[2].remove();
  }
}
function updateTask(e){
  let todo = e.path[2].children[0];
  let containerTodo = e.path[2];
  if(todo.classList.contains('todo') ){
    todo.classList.add('hidden');
    const inputModify = document.createElement('input');
    containerTodo.classList.toggle('containerNewTodo');
    containerTodo.appendChild(inputModify);
 
  }
  if(todo.classList.contains('hidden')){
 
  let inputMod = e.path[2].children[4];
  inputMod.className = 'display';
  inputMod.addEventListener('change' , updateTxt);

  }
}

function updateTxt(e){
  let containerTodo = e.path[1];

  let txtUpdate = e.target.value;

if(e.path[1].children[0].classList.contains('hidden'))
{e.path[1].children[0].innerHTML = txtUpdate;
  e.path[1].children[0].classList.remove('hidden');
  e.path[1].children[0].classList.add('todo');
  containerTodo.classList.toggle('containerNewTodo');
  e.path[0].remove();

}
}












