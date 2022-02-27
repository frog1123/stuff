import React, { Component } from "react";
// css
import styles from "../../styles.css";
import localStyles from "./AudioControls.css";
// imports
import time_flies from "../../assets/audio/time flies.mp3";

class AudioControls extends Component {
  state = {
    src: new Audio(time_flies),
    isPlaying: false
  };
  render() {
    return (
      <div id='audio-controls' className='gradient-border'>
        <button className={this.toggleAudioIcon()} onClick={this.checkIfPlaying} />
        <button id='audio-back' className='img-fix cursor-pointer' onClick={this.skipBack} />
        <button id='audio-forward' className='img-fix cursor-pointer' onClick={this.skipForward} />
      </div>
    );
  }
  checkIfPlaying = () => {
    if (this.state.isPlaying) {
      this.state.src.pause();
      this.setState({ isPlaying: false });
    } else {
      this.state.src.play();
      this.setState({ isPlaying: true });
    }
    this.state.src.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  };
  toggleAudioIcon() {
    let classes = "img-fix cursor-pointer audio-";
    classes += this.state.isPlaying ? "pause" : "play";
    return classes;
  }
  skipForward = () => {
    this.state.src.currentTime += 10;
  };
  skipBack = () => {
    this.state.src.currentTime -= 10;
  };
}

export default AudioControls;
