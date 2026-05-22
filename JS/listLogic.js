let editButton = null;
let editInputField = document.getElementById("taskNameInputField");
let showingPopUp = false;

function main() {

    document.addEventListener("click", event => {

        if (event.target.classList.contains("del")) {
            event.target.closest(".task").remove();
            console.log("Task Deleted");
        }

        else if(event.target.classList.contains("add")){
            let parent = addTask();
            
            event.target.closest(".list").appendChild(parent);
            
        }

        else if(event.target.classList.contains("addList")){
            let parent = addNewList();

            document.querySelector(".mainContainer").appendChild(parent);
        }

        else if(event.target.classList.contains("delList")){
            deleteList(event);
        }

        else if(event.target.classList.contains("edit")){
            editTaskPopUp(event);
        }

        else if(event.target.classList.contains("taskNameButton")){
            renameTask();
        }

        else if(event.target.classList.contains("editTaskCancelButton")){
            cancelTaskEdit();
        }
        else{console.log("Waiting for something to happen...?");}

    });

    document.addEventListener("keydown", event =>{
        if(event.key === "Enter"){
           // still some bugs with the edit button. Please fix soon
            renameTask();
        }

        if(event.key === "Tab" && showingPopUp == true){
            event.preventDefault();
            console.log("Prevented Tabing...");
        }

        if(event.key === "Escape" && showingPopUp == true){
            cancelTaskEdit();
        }
    });

}//This is a VERY useful function. Copy and paste into AI to learn more

function addTask(){

    console.log("Task Added");

    let parent = document.createElement("div"); 
    parent.classList.add("task");

    //create <p> element
    let para = document.createElement("p");
    para.classList.add("taskName")
    para.textContent = "New Task";

    //Create delete button
    let delBtn = document.createElement("button");
    delBtn.classList.add("del");
    delBtn.textContent = "Delete";

    //Create edit button
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";

    //Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    /////assemble in correct order
    parent.append(para, delBtn, editBtn, checkbox);

    
    return parent;
}

function addNewList(){

    console.log("List added");

    let parent = document.querySelector(".mainContainer");

    let list = document.createElement("div");
    list.classList.add("list");

    let buttonBox = document.createElement("div");
    buttonBox.classList.add("listButtons");

    let addBtn = document.createElement("button");
    addBtn.classList.add("add");
    addBtn.textContent = "Add Task"

    let delListBtn = document.createElement("button");
    delListBtn.classList.add("delList");
    delListBtn.textContent = "Delete List"

    let task = document.createElement("div");
    task.classList.add("task");

    let para = document.createElement("p");
    para.textContent = "New Task";

    let delBtn = document.createElement("button");
    delBtn.classList.add("del");
    delBtn.textContent = "Delete"

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = ("Edit");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    buttonBox.append(addBtn, delListBtn);
    task.append(para, delBtn, editBtn, checkbox);
    list.append(buttonBox, task);
    //parent.appendChild(task);

    return list;
}

function deleteList(ev){
    ev.target.closest(".list").remove();
    console.log("List Deleted");
}

function cancelTaskEdit(){
    document.querySelector(".editPopUp").style.display = "none";
    showingPopUp = false;
}

function editTaskPopUp(ev){

    editButton = ev.target;
    document.querySelector(".editPopUp").style.display = "block";
    editInputField.focus();
    showingPopUp = true;
}

function getNewTaskName(){
    console.log("Getting new task name 1...");

    let newTaskName = document.querySelector("#taskNameInputField");
    newTaskName = newTaskName.value.trim();

    cancelTaskEdit();

    console.log("New Task name is: " + newTaskName);
    console.log("Getting new task name 2...");

    return newTaskName;
}

function renameTask(){
    let newTaskName = getNewTaskName();
    editButton.previousElementSibling.previousElementSibling.textContent = newTaskName;
    showingPopUp = false;
    editInputField.value = "";
}

export{main, addTask, addNewList};