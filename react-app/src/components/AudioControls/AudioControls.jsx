import React, { Component } from "react";
// css
import styles from "../../styles.css";
import localStyles from "./AudioControls.css";
class AudioControls extends Component {
  state = {};
  audio = new Audio("../../assets/audio/time flies");
  render() {
    return (
      <div id='audio-controls' className='gradient-border'>
        <button id='audio-play' className='img-fix cursor-pointer' />
        <button id='audio-pause' className='img-fix cursor-pointer' />
        <button id='audio-back' className='img-fix cursor-pointer' />
        <button id='audio-forward' className='img-fix cursor-pointer' />
      </div>
    );
  }
}

export default AudioControls;
