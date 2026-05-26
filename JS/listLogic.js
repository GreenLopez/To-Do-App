//Double check the functions of 'edit' and 'add task' buttons
//Prevent tabbing when in the "Delete All Lists" pop-up menu

let showingPopUp = false;
let delALPU = false;

let editButton = null;
let editInputField = document.getElementById("taskNameInputField");

let addNewTaskButton = null;
let addingNewTask = false;
let newTask = null;
let newTaskNameV = null;

let delAllListsBtn = document.getElementById("deleteAllLists");

function main() {

    document.addEventListener("click", event => {

        if (event.target.classList.contains("del")) {
            event.target.closest(".task").remove();
            console.log("Task Deleted");
        }

        else if(event.target.classList.contains("add")){
            
            displayNewTaskPopUp(event);
        }

        else if(event.target.classList.contains("addList")){
            let parent = addNewList();

            document.querySelector(".mainContainer").appendChild(parent);
        }

        else if(event.target.classList.contains("delList")){
            deleteList(event);
        }

        else if(event.target == delAllListsBtn){
        
            displayDelAllListsPopUp();
        }

        else if(event.target == document.getElementById("DCPUNo")){
            cancelDelAllLists();
        }

        else if(event.target == document.getElementById("DCPUYes")){
            deleteAllLists();
        }

        else if(event.target.classList.contains("edit")){
            editTaskPopUp(event);
        }

        else if(event.target.classList.contains("taskNameButton")){
            
            if(showingPopUp == true && addingNewTask == false){
                // still some bugs with the edit button. Please fix soon
                renameTask();
                console.log("Task renamed");
            }

            if(showingPopUp == true && addingNewTask == true){
                
                appendNewTask(event);
                console.log("New task appended");
            }
        }

        else if(event.target.classList.contains("editTaskCancelButton")){
            cancelTaskEdit();
        }
        else{console.log("Waiting for something to happen...?");}

    });

    document.addEventListener("keydown", event =>{
        if(event.key === "Enter" && showingPopUp == true && addingNewTask == false){
           
            renameTask();
            console.log("Task renamed");
        }

        if(event.key ==="Enter" && showingPopUp == true && addingNewTask == true){
             
            appendNewTask(event);
            console.log("New task appended");
        }

        if(event.key === "Tab" && showingPopUp == true){
            event.preventDefault();
            console.log("Prevented Tabing...");
        }

        if(event.key === "Escape" && showingPopUp == true){
            cancelTaskEdit();
        }
        
    });

}//This is a VERY useful function

function createTask(event){

   
    /*Figure out why  
    
        let para = document.createElement("p");
        para.classList.add("taskName")
        para.innerText = getNewTaskName();

        Didn't work...
    */

    newTaskNameV = getNewTaskName();
    
    //let taskName = getNewTaskName();
    editInputField.value = "";

    let parent = document.createElement("div"); 
    parent.classList.add("task");

    //create <p> element
    let para = document.createElement("p");
    para.classList.add("taskName");
    para.innerText = newTaskNameV;
    

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

    

    console.log("Name the new task...");

    
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

function displayDelAllListsPopUp(){
    let popUp = document.querySelector(".doubleCheckPopUp");
    popUp.style.display = "block";

    showingPopUp = true;
}

function cancelDelAllLists(){
    let popUp = document.querySelector(".doubleCheckPopUp");
    popUp.style.display = "none";

    showingPopUp = false;
}

function deleteAllLists(){

    let lists = document.querySelectorAll(".list");
    lists.forEach(list => list.remove());

    let popUp = document.querySelector(".doubleCheckPopUp");
    popUp.style.display = "none";

    showingPopUp = false;
    console.log("All lists deleted...");
    
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
    console.log("Popup...");
}

function getNewTaskName(){
    console.log("Getting new task name...");

    let newTaskName = document.querySelector("#taskNameInputField");
    newTaskName = newTaskName.value.trim();

    cancelTaskEdit();

    console.log("New Task name is: " + newTaskName);

    return newTaskName;
}

function renameTask(){
    let taskName = getNewTaskName();
    editButton.previousElementSibling.previousElementSibling.textContent = taskName;
    showingPopUp = false;
    editInputField.value = "";
}

function appendNewTask(event){
    
    newTask = createTask(event);

    showingPopUp = false;
    addingNewTask = false;
    editInputField.value = "";
    addNewTaskButton.closest(".list").append(newTask);
}
    
function displayNewTaskPopUp(event){
    addingNewTask = true;
    addNewTaskButton = event.target;
    editTaskPopUp(event);
}

export{main, createTask, addNewList};