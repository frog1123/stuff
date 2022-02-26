import React, { Component } from "react";

const ListButton = (props) => {
  return (
    <button id={`list-btn-${props.id}`} className='list-button gradient cursor-pointer' onClick={scrollTo}>
      <h2 style={{ margin: "auto", fontWeight: 200, fontSize: 18.5 }}>{props.text}</h2>
    </button>
  );
  function scrollTo() {
    document.body.scrollTop = props.scrollValue; // Safari
    document.documentElement.scrollTop = props.scrollValue; // Chrome, Firefox, IE and Opera
  }
};

export default ListButton;
