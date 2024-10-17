// for adding the task
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){
    alert("Enter the task before click on add button")
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value="";
  saveData()
}

listContainer.addEventListener("click", function(e){
  if (e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
}, false)

// Browser ke reload hone par data gayab na ho uske liye 

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}
showTask();