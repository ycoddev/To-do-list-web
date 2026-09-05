const button = document.getElementById("btn");
const task = document.getElementById("task");
const list = document.getElementById("list");

let tasks = [];


function addTaskToPage(text) {
  const newtask = document.createElement('li');
  const removebtn = document.createElement('button');

  newtask.textContent = text;
  removebtn.textContent = "🗑️";

  newtask.append(removebtn);
  list.appendChild(newtask);

  removebtn.addEventListener("click", function(){
    newtask.remove();
    let position = tasks.indexOf(text);                  
    tasks.splice(position, 1);                            
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  removebtn.classList.add("remove-btn");
}

button.addEventListener("click", function(){
  const text = task.value;
  if (text === "") return;

  addTaskToPage(text);      
  tasks.push(text);          
  localStorage.setItem("tasks", JSON.stringify(tasks));  

  task.value = "";
});

let saved = localStorage.getItem("tasks");
if (saved !== null) {
  tasks = JSON.parse(saved);
  tasks.forEach(function(taskText) {
    addTaskToPage(taskText);
  });
}