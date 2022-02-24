import React, { Component } from "react";
// css
import localStyles from "./AudioControls.css";

class AudioControls extends Component {
  state = {};
  audio = new Audio("../../assets/audio/time flies");
  render() {
    return (
      <div id='audio-controls' className='gradient-border'>
        <button></button>
      </div>
    );
  }
}

export default AudioControls;
