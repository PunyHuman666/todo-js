let input = document.querySelector("#input-task");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("ul");

function addTask() {
    const text = input.value.trim();
    
    if (text != "") {
        createTask(text);
        input.value = "";
        input.focus();
        if (ul.childNodes.length > 0) {
            ul.classList.add("task-list");
        }
    }   
}

function createTask(text) {
    const li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li);
    createCheckBox(li);
    createDeleteButton(li);
}

function createDeleteButton(task) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Task";
    deleteBtn.classList.add("delete-task");
    task.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteTask);
}

function createCheckBox(task) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    task.prepend(checkBox);
    checkBox.addEventListener("click", taskDone);
}

function taskDone(event) {
    const item = event.target;
    item.parentNode.classList.toggle("task-done");
}

function deleteTask(event) {
    const remove = event.target;
    remove.parentNode.remove();
    if (ul.childNodes.length === 0) {
        ul.classList.remove("task-list");
    }
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
})
