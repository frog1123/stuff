import React, { Component } from "react";
// css
import localStyles from "./HeadContent.css";
// imports
import frog from "../../../src/assets/images/frog.jpg";
import avatar_frame from "../../../src/assets/images/avatar frame.gif";

class HeadContent extends Component {
  render() {
    return (
      <div id='main'>
        <div id='profile'>
          <div id='banner'>
            <div id='profile-container'>
              <img id='img1' src={frog} />
              <img id='img2' src={avatar_frame} />
              <div id='frogdude1123' className='frog-text'>
                <h1>frogdude1123</h1>
                <h1>frogdude1123</h1>
              </div>
            </div>
          </div>
          <div className='line' />
        </div>
      </div>
    );
  }
}

export default HeadContent;
