import{main, createTask, addNewList}from './listLogic.js';

let btn = document.getElementById("button");
let letters = document.getElementById("Header1");
let body = document.getElementsByTagName("body")[0];

let delAllListsBtn = document.getElementById("deleteAllLists");

document.addEventListener("DOMContentLoaded", ()=>{
  ////
  
  main();
  //addTask();
  //editTask();
  
  document.addEventListener("mousedown", event => {
    //window.electronAPI.logToTerminal("Button Was Clicked!");

    checkMouseDown(event);

    /*if(body.style.backgroundColor == "white" || body.style.backgroundColor == ""){
      body.style.backgroundColor = "#222";
      //body.style.backgroundColor = "white";
    }
    else{
      body.style.backgroundColor = "white";
      //body.style.backgroundColor = "#222";
    }*/
  });

  document.addEventListener("mouseup", event =>{

    checkMouseUp(event);

  });

  document.addEventListener("mouseover", event =>{
    checkMouseHover(event);
  });

  document.addEventListener("mouseout", event =>{
    checkMouseLeave(event);
    
  });

  ///
});

function checkMouseDown(event){

  if(event.target == btn){
    btn.style.backgroundColor = "blue";
    btn.style.borderColor = "black";
    btn.style.borderWidth = "4px";      
  }

  if(event.target == delAllListsBtn){
    delAllListsBtn.style.backgroundColor = "rgb(183, 65, 14)"; //rust color
    delAllListsBtn.style.borderColor = "black";
    delAllListsBtn.style.borderWidth = "4px";      

    console.log("Orange down!");
  }
}

function checkMouseUp(event){

  if(event.target == btn){
    btn.style.backgroundColor = "aqua";
    btn.style.borderWidth = "2px";
  }

  if(event.target == delAllListsBtn){
    delAllListsBtn.style.backgroundColor = "rgb(207, 130, 13)"; // A shade of orange
    delAllListsBtn.style.borderWidth = "2px";

    console.log("Orange up!");
  }
}

function checkMouseHover(event){
  if(event.target == btn){
    btn.style.backgroundColor = "gray";
  }

  if(event.target == delAllListsBtn){
    delAllListsBtn.style.backgroundColor = "gray";
    console.log("Orange Hover!");
  }
}

function checkMouseLeave(event){
  if(event.target == btn){
    btn.style.backgroundColor = "aqua";
  }

  if(event.target == delAllListsBtn){
    delAllListsBtn.style.backgroundColor = "rgb(207, 130, 13)";
    console.log("Orange Leave!");
  }
}

/////////////////////////////////////////////////////////////////////