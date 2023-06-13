var soundCrash = new Audio('./sounds/crash.mp3');
var kickBass = new Audio('./sounds/kick-bass.mp3');
var snare = new Audio('./sounds/snare.mp3');
var tom1 = new Audio('./sounds/tom-1.mp3');
var tom2 = new Audio('./sounds/tom-2.mp3');
var tom3 = new Audio('./sounds/tom-3.mp3');
var tom4 = new Audio('./sounds/tom-4.mp3');

document.querySelector(".drum").addEventListener("click", function () {
    soundCrash.play();
    makeAnimationVersion2(".drum");

    // complete sound for sound crash
});

document.querySelector(".drum:nth-child(2)").addEventListener("click", function () {
    snare.play();
    makeAnimationVersion2(".drum:nth-child(2)");
    // complete sound for snare
});

document.querySelector(".drum:nth-child(3)").addEventListener("click", function () {
    kickBass.play();
    makeAnimationVersion2(".drum:nth-child(3)");
    // complete sound for kick bass
});

document.querySelector(".drum:nth-child(4)").addEventListener("click", function () {
    tom1.play();
    makeAnimationVersion2(".drum:nth-child(4)");

    // complete sound for  tom 1
});

document.querySelector(".drum:nth-child(5)").addEventListener("click", function () {
    tom2.play();
    makeAnimationVersion2(".drum:nth-child(5)");

    // complete sound for  tom 2

});

document.querySelector(".drum:nth-child(6)").addEventListener("click", function () {
    tom3.play();
    makeAnimationVersion2(".drum:nth-child(6)");

    // complete sound for  tom 3

});

document.querySelector(".drum:nth-child(7)").addEventListener("click", function () {
    tom4.play();
    makeAnimationVersion2(".drum:nth-child(7)");

    // complete sound for  tom 4

});


window.addEventListener("keydown", function (event) { 
    // complete event release sound when user press keyboard
    switch(event.key)
    {
        case "w":
            soundCrash.play();
            makeAnimation("w");
            
            break;
        
        case "a":
            kickBass.play();
            makeAnimation("a");
            break;
        
        case "s":
            snare.play();
            makeAnimation("s");
            break;
        case "d":
            tom1.play();
            makeAnimation("d");
            break;
        case "j":
            tom2.play();
            makeAnimation("j");
            break;
        
        case "k":
            tom3.play();
            makeAnimation("k");
            break;
        
        case "l":
            tom4.play();
            makeAnimation("l");
            break;
    }
});


// function  make animation when press drum

function makeAnimation(currentPressed) {
    document.querySelector("."+currentPressed).classList.add("pressed");
    setTimeout( function () {
        document.querySelector("."+currentPressed).classList.remove("pressed");

    },100);
}

function makeAnimationVersion2(className) {
    document.querySelector(className).classList.add("pressed");
    setTimeout( function () {
        document.querySelector(className).classList.remove("pressed");

    },100);
}
    


    





