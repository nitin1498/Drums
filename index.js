var arr=document.querySelectorAll("button");
for(var i=0;i<7;i++) {
    arr[i].addEventListener("click", clickHandle);
}
function clickHandle() {
    buttonAnimation(this.innerHTML);
    makeSound(this.innerHTML);
}


document.addEventListener("keydown", function(event){
    var key = event.key;
    makeSound(key);
    buttonAnimation(key)
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();

            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();

            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();

            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();

            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();

            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();

            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();

            break;
    }
}

function buttonAnimation(currentKey) {
    var key = document.querySelector("." + currentKey);
    key.classList.add("pressed");
    setTimeout(function () {
        key.classList.remove("pressed")
    }, 100);
}