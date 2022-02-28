import React, { Component } from "react";
// css
import styles from "../../styles.css";
import localStyles from "./AboutMe.css";

import frog from "../../assets/images/about me frog.png";
class AboutMe extends Component {
  render() {
    return (
      <div id='info' className='gradient-border'>
        <h1 className='title-text' style={{ fontSize: 50, margin: 0, fontWeight: 200 }}>
          <span className='gradient-text'>ABOUT ME</span>
        </h1>
        <p id='info-text'>
          Hello I'm <span className='gradient-text'>frogdude1123</span> idk what else to put here
        </p>
        <div id='container'>
          <img src={frog} style={{ marginLeft: "auto", marginRight: "auto" }} />
        </div>
      </div>
    );
  }
}

export default AboutMe;
