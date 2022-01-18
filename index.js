// audio controls
function playAudio(){
    var audio = document.getElementById("time-flies");
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById('pauseButton');
    audio.play();
    playButton.style.backgroundSize="100% 100%";
    pauseButton.style.backgroundSize="100% 100%";
    playButton.style.display="none";
    pauseButton.style.display="block"
}
function pauseAudio(){
    var audio = document.getElementById("time-flies");
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById('pauseButton');
    audio.pause();
    playButton.style.backgroundSize="100% 100%";
    pauseButton.style.backgroundSize="100% 100%";
    playButton.style.display="block";
    pauseButton.style.display="none"
}