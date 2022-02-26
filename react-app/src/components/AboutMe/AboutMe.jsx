import React, { Component } from "react";
// css
import styles from "../../styles.css";
import localStyles from "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div id='info' className='gradient-border'>
        <h1 className='title-text' style={{ fontSize: 50, margin: 0, fontWeight: 200 }}>
          <span className='gradient-text'>ABOUT ME</span>
        </h1>
        <p id='info-text'>
          Lorem ipsum dolor sit amet, <span className='gradient-text'>consectetur</span> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ultrices in iaculis nunc sed. Ac placerat vestibulum lectus mauris ultrices. Ac tincidunt vitae semper quis lectus nulla at volutpat. Ullamcorper eget nulla facilisi etiam dignissim diam. Et malesuada fames ac turpis egestas integer eget aliquet. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Viverra nam libero justo laoreet. Id neque aliquam vestibulum morbi blandit cursus. At risus viverra adipiscing at in tellus integer feugiat. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Nam libero justo laoreet sit amet cursus sit amet. Erat imperdiet sed euismod nisi porta lorem. Ipsum dolor sit amet consectetur adipiscing elit. Natoque penatibus et magnis dis parturient montes nascetur. Id diam maecenas ultricies mi eget.
          Ultricies integer quis auctor elit sed. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Tortor vitae purus faucibus ornare. Elit eget gravida cum sociis natoque. Morbi tincidunt augue interdum velit euismod in. Enim ut tellus elementum sagittis vitae et leo duis. Senectus et netus et malesuada. Neque sodales ut etiam sit amet nisl purus in. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Sed ullamcorper morbi tincidunt ornare massa eget. Volutpat lacus laoreet non curabitur gravida arcu. Morbi tristique senectus et netus. In fermentum et sollicitudin ac orci phasellus egestas. Ligula ullamcorper malesuada proin libero nunc. Consequat semper viverra nam libero justo laoreet. Scelerisque fermentum dui faucibus in ornare quam viverra.
        </p>
      </div>
    );
  }
}

export default AboutMe;
