var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var w = new Audio("sounds/kick-bass.mp3");
var s = new Audio("sounds/snare.mp3");
var t1 = new Audio("sounds/tom-1.mp3");
var t2 = new Audio("sounds/tom-2.mp3");
var t3 = new Audio("sounds/tom-3.mp3");
var t4 = new Audio("sounds/tom-4.mp3");
var c = new Audio("sounds/crash.mp3");

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

for( var i = 0; i < numberOfDrumButtons; i ++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML= this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

function playSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;  
        case "j":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play(); 
            break;   
        case "k":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();  
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}
 