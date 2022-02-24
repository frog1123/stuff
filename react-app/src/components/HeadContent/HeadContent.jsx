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
          <div id='banner' className='gradient-border'>
            <div id='avatar'>
              <img id='img1' src={frog} />
              <img id='img2' src={avatar_frame} />
              <h1 id='frogdude1123' className='gradient-border'>
                [frogdude1123]
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadContent;
