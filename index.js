// audio controls
function playAudio(){
    var audio = document.getElementById("time-flies");
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById('pauseButton');
    audio.play();
    playButton.style.display="none";
    playButton.style.backgroundSize="100% 100%";
    pauseButton.style.display="block"
    pauseButton.style.backgroundSize="100% 100%";
}
function pauseAudio(){
    var audio = document.getElementById("time-flies");
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById('pauseButton');
    audio.pause();
    playButton.style.display="block";
    playButton.style.backgroundSize="100% 100%";
    pauseButton.style.display="none"
    pauseButton.style.backgroundSize="100% 100%";
}