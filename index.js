// alert("yeah")
for(var i=0; i<=6; ++i){
    document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}
document.addEventListener("keydown", pressed);

function clicked(){
    // this = document.querySelectorAll(".drum")[i] ----specific selected
    playSound(this.innerHTML);
    changeColor(this.innerHTML);
    // this.style.color="black";    // it will also work
}
function pressed(event){
    // this = document here
    playSound(event.key);
    changeColor(event.key);
    // this.lastChild.lastChild.style.backgroundColor="black"; // it will work
    // document.querySelector("." + event.key).style.color="purple"; // it will work
}

function playSound(key){
    if(key==="a"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    if(key==="s"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    if(key==="d"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    if(key==="j"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    if(key==="l"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    if(key==="k"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    if(key==="w"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
}
function changeColor(key){
    var activeClass = document.querySelector("." + key);
    activeClass.classList.add("pressed");
    setTimeout(function(){
        activeClass.classList.remove("pressed");
    }, 200);
}

/*
For selecting event
1. In mouse click, can use "this" and innerHTML property
2. for "keydown", as it is applied on body, so can't directly use "this"
   use "event.key" for getting key or use "querySelector"

For changing color
1. make class in CSS and add that class to target element through js
2. directly change HTML property using .property.color=""; from js

For removing that color
1. use delay i.e. setTimeOut method of js
2. use keydown and keyup and change the color separately but cant change of mouseClick by
this way
*/

/*
document.addEventListener("keyup", released);
function released(e){
    // this.style.color="blue";
    // document.querySelector("." + e.key).style.color="#DA0463";
}
*/