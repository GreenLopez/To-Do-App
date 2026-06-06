import{main, createTask, addNewList}from './listLogic.js';

let btn = document.getElementById("button");
let letters = document.getElementById("Header1");
let body = document.getElementsByTagName("body")[0];

let delAllListsBtn = document.getElementById("deleteAllLists");

document.addEventListener("DOMContentLoaded", ()=>{
  
  main();
  
  document.addEventListener("mousedown", event => {

    checkMouseDown(event);
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
    delAllListsBtn.style.backgroundColor = "rgb(102, 34, 5)"; //rust color
    delAllListsBtn.style.borderColor = "black";
    delAllListsBtn.style.borderWidth = "4px";
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
  }
}

function checkMouseHover(event){
  if(event.target == btn){
    btn.style.backgroundColor = "white";
  }

  if(event.target == delAllListsBtn){
    delAllListsBtn.style.backgroundColor = "white";
  }
}

function checkMouseLeave(event){
  if(event.target == btn){
    btn.style.backgroundColor = "aqua";
  }

  if(event.target == delAllListsBtn){
    delAllListsBtn.style.backgroundColor = "rgb(207, 130, 13)";
  }
}