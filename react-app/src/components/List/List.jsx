import React, { Component } from "react";
// css
import styles from "../../styles.css";
import localStyles from "./List.css";
// components
import ListButton from "./ListButton.jsx";

class List extends Component {
  render() {
    return (
      <div className='gradient-border' style={{ margin: "auto", width: "max-content" }}>
        <div id='list-containter' style={{ padding: "15px" }}>
          <ListButton id='1' text='Socials' scrollValue={700} />
          <ListButton id='2' text='About Me' scrollValue={3000} />
        </div>
      </div>
    );
  }
}

export default List;
