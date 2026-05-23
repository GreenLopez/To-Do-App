import{main, createTask, addNewList}from './listLogic.js';

document.addEventListener("DOMContentLoaded", ()=>{
  ////
  
  main();
  //addTask();
  //editTask();

  const btn = document.getElementById("button");
  let letters = document.getElementById("Header1");
  let body = document.getElementsByTagName("body")[0];
  
  btn.addEventListener("mousedown", event => {
    //window.electronAPI.logToTerminal("Button Was Clicked!");

    btn.style.backgroundColor = "blue";
    btn.style.borderColor = "black";
    btn.style.borderWidth = "4px";

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

    btn.style.backgroundColor = "aqua";
    btn.style.borderWidth = "2px";

  });

  btn.addEventListener("mouseover", event =>{
    btn.style.backgroundColor = "gray";
  });

  btn.addEventListener("mouseleave", event =>{
    btn.style.backgroundColor = null;
  });

  ///
});