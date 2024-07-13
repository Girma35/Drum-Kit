function removeClass(currentButton) {
    setTimeout(function() {
        currentButton.remove("pressed");
    }, 100);
}

document.addEventListener("keydown", function(event) {
    switch (event.key.toLowerCase()) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            var currentButton = document.getElementsByClassName("drum")[0].classList;
            currentButton.add("pressed");
            removeClass(currentButton);
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            console.log(event)
            var currentButton = document.getElementsByClassName("drum")[1].classList;
            currentButton.add("pressed");
            removeClass(currentButton);
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            var currentButton = document.getElementsByClassName("drum")[2].classList;
            currentButton.add("pressed");
            removeClass(currentButton);
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            var currentButton = document.getElementsByClassName("drum")[3].classList;
            currentButton.add("pressed");
            removeClass(currentButton);
            break;
        case "j":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            var currentButton = document.getElementsByClassName("drum")[4].classList;
            currentButton.add("pressed");
            removeClass(currentButton);
            break;
        case "k":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            var currentButton = document.getElementsByClassName("drum")[5].classList;
            currentButton.add("pressed");
            removeClass(currentButton);
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            var currentButton = document.getElementsByClassName("drum")[6].classList;
            currentButton.add("pressed");
            removeClass(currentButton);
            break;
        default:
            console.log(event.key);
            break;
    }

});
