import React, { Component } from "react";
// css
import styles from "../../styles.css";
import localStyles from "./List.css";
// components
import ListButton from "./ListButton.jsx";

class List extends Component {
  render() {
    return (
      <div style={{ margin: "auto", width: "max-content" }}>
        <div id='list-containter' style={{ padding: "5px" }}>
          <ListButton id='1' text='Socials' scrollValue={700} />
          <ListButton id='2' text='About Me' scrollValue={3000} />
        </div>
        <div className='line' />
      </div>
    );
  }
}

export default List;
