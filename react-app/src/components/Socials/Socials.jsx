import React, { Component } from "react";
// css
import styles from "../../styles.css";
import localStyles from "./Socials.css";
// components
import Social from "./Social.jsx";
// imports
import youtube_icon from "../../assets/images/youtube icon.png";
import discord_icon from "../../assets/images/discord icon.png";
import steam_icon from "../../assets/images/steam icon.png";
import spotify_icon from "../../assets/images/spotify icon.png";
import github_icon from "../../assets/images/github icon.png";

class Socials extends Component {
  state = {
    info: [
      { id: 1, topText: "youtube", bottomText: "bottom text", src: youtube_icon, link: "https://www.youtube.com/channel/UCNTeMcd7BDOuNrVf1yRGZlA", noLink: false },
      { id: 2, topText: "discord", bottomText: "bottom text", src: discord_icon, noLink: true },
      { id: 3, topText: "discord2", bottomText: "bottom text", src: discord_icon, noLink: true },
      { id: 4, topText: "discord3", bottomText: "bottom text", src: discord_icon, noLink: true },
      { id: 5, topText: "steam", bottomText: "bottom text", src: steam_icon, link: "https://steamcommunity.com/id/frogdude1123/", noLink: false },
      { id: 6, topText: "spotify", bottomText: "bottom text", src: spotify_icon, link: "https://open.spotify.com/user/ckenvyd4xokwet9bbir3hfxn9?si=bbda1b6ab230463b", noLink: false },
      { id: 7, topText: "github", bottomText: "bottom text", src: github_icon, link: "https://github.com/frog1123", noLink: false }
    ]
  };
  render() {
    return (
      <div id='socials' className='gradient-border'>
        <h1 className='title-text' style={{ fontSize: 50, margin: 0, fontWeight: 200 }}>
          <span className='gradient-text'>SOCIALS</span>
        </h1>
        <div id='socials-grid'>
          {this.state.info.map((info) => (
            <Social id={`social${info.id}`} key={info.id} info={info} />
          ))}
        </div>
      </div>
    );
  }
}

export default Socials;
