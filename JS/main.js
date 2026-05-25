import{main, createTask, addNewList}from './listLogic.js';

let btn = document.getElementById("button");
let letters = document.getElementById("Header1");
let body = document.getElementsByTagName("body")[0];

document.addEventListener("DOMContentLoaded", ()=>{
  ////
  
  main();
  //addTask();
  //editTask();
  
  document.addEventListener("mousedown", event => {
    //window.electronAPI.logToTerminal("Button Was Clicked!");

    clickAddListBtn(event);

    /*if(body.style.backgroundColor == "white" || body.style.backgroundColor == ""){
      body.style.backgroundColor = "#222";
      //body.style.backgroundColor = "white";
    }
    else{
      body.style.backgroundColor = "white";
      //body.style.backgroundColor = "#222";
    }*/
  });

  btn.addEventListener("mouseup", event =>{

    mouseUpAddListBtn(event);

  });

  btn.addEventListener("mouseover", event =>{
    mouseOverAddListBtn(event);
  });

  btn.addEventListener("mouseleave", event =>{
    mouseLeaveAddListBtn(event);
  });

  ///
});

function clickAddListBtn(event){

  if(event.target == btn){
    btn.style.backgroundColor = "blue";
    btn.style.borderColor = "black";
    btn.style.borderWidth = "4px";      
  }
}

function mouseUpAddListBtn(event){

  if(event.target == btn){
    btn.style.backgroundColor = "aqua";
    btn.style.borderWidth = "2px";
  }
}

function mouseOverAddListBtn(event){
  if(event.target == btn){
    btn.style.backgroundColor = "gray";
  }
}

function mouseLeaveAddListBtn(event){
  if(event.target == btn){
    btn.style.backgroundColor = null;
  }
}