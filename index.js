
for (var i = 0; i< document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        
        playingSound (buttonInnerHtml);
        animation (buttonInnerHtml);
            
    });
}

document.addEventListener("keypress", function (event) { 
    playingSound (event.key.toLowerCase());
    animation (event.key);
})




function playingSound (key) {

    switch (key) {
        case "w":
            var audioW = new Audio("sounds/boom.mp3");
            audioW.currentTime = 0;
            audioW.play();
            break;
        case "a":
            var audioA = new Audio("sounds/hihat.mp3");
            audioA.currentTime = 0;
            audioA.play();
            break;
        case "s":
            var audioS = new Audio("sounds/tink.mp3");
            audioS.currentTime = 0;
            audioS.play();
            break;
        case "d":
            var audioD = new Audio("sounds/ride.mp3");
            audioD.currentTime = 0;
            audioD.play();
            break;
        case "f":
            var audioF = new Audio("sounds/kick.mp3");
            audioF.currentTime = 0;
            audioF.play();
            break;
        case "j":
            var audioJ = new Audio("sounds/snare.mp3");
            audioJ.currentTime = 0;
            audioJ.play();
            break;
        case "k":
            var audioK = new Audio("sounds/tom.mp3");
            audioK.currentTime = 0;
            audioK.play();
            break;
                                    
        case "l":
            var audioL = new Audio("sounds/openhat.mp3");
            audioL.currentTime = 0;
            audioL.play();
            break;
                                        
        default:
            console.log();
            break;
    }
}
                                      
function animation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("anim");

    setTimeout(function(){
        activeButton.classList.remove("anim");
    },100);
}
                                        