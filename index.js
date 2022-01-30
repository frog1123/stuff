 // audio controls
function playAudio(){
    var audio = document.getElementById("time-flies");
    var playButton = document.getElementById("audio-play");
    var pauseButton = document.getElementById('audio-pause');
    audio.play();
    playButton.style.backgroundSize="100% 100%";
    pauseButton.style.backgroundSize="100% 100%";
    playButton.style.display="none";
    pauseButton.style.display="block"
}
function pauseAudio(){
    var audio = document.getElementById("time-flies");
    var playButton = document.getElementById("audio-play");
    var pauseButton = document.getElementById('audio-pause');
    audio.pause();
    playButton.style.backgroundSize="100% 100%";
    pauseButton.style.backgroundSize="100% 100%";
    playButton.style.display="block";
    pauseButton.style.display="none"
}
function skipBack(){
    var audio = document.getElementById("time-flies");
    var backButton = document.getElementById("audio-back");
    audio.currentTime -= 10;
}
function skipForward(){
    var audio = document.getElementById("time-flies");
    var backButton = document.getElementById("audio-forward");
    audio.currentTime += 10; 
}