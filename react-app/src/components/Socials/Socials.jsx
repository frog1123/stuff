import React, { Component } from "react";
// css
import styles from "../../styles.css";
import localStyles from "./Socials.css";
// components
import Social from "./Social.jsx";
// imports
import youtube_icon from "../../../src/assets/images/youtube icon.png";
import discord_icon from "../../../src/assets/images/discord icon.png";
import steam_icon from "../../../src/assets/images/steam icon.png";
import spotify_icon from "../../../src/assets/images/spotify icon.png";
import github_icon from "../../../src/assets/images/github icon.png";

class Socials extends Component {
  state = {
    info: [
      { id: 1, topText: "youtube", bottomText: "bottom text", src: youtube_icon, link: "https://www.youtube.com/channel/UCNTeMcd7BDOuNrVf1yRGZlA", noLink: false },
      { id: 2, topText: "discord", bottomText: "bottom text", src: discord_icon, noLink: true },
      { id: 3, topText: "discord2", bottomText: "bottom text", src: discord_icon, noLink: true },
      { id: 4, topText: "discord3", bottomText: "bottom text", src: discord_icon, noLink: false },
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

// class Socials extends Component {
//   state = {
//     socials: [
//       { id: 1, src: { youtube_icon } },
//       { id: 2, src: { discord_icon } }
//     ]
//   };
//   render() {
//     const openYoutubeLink = () => {
//       window.open("https://www.youtube.com/channel/UCNTeMcd7BDOuNrVf1yRGZlA", "_blank");
//     };
//     const openSteamLink = () => {
//       window.open("https://steamcommunity.com/id/frogdude1123/", "_blank");
//     };
//     const openSpotifyLink = () => {
//       window.open("https://open.spotify.com/user/ckenvyd4xokwet9bbir3hfxn9?si=bbda1b6ab230463b", "_blank");
//     };
//     const openGithubLink = () => {
//       window.open("https://github.com/frog1123", "_blank");
//     };
//     return (
// <div id='socials' className='gradient-border'>
//   <h1 className='big-text title-text'>
//     <span className='gradient-text'>SOCIALS</span>
//   </h1>
//   <div id='socials-grid'>
//     <button id='social1' className='social-tab cursor-pointer' onClick={openYoutubeLink}>
//       <div className='line'></div>
//       <div className='social-tab-background'>
//         <img className='social-icon' src={youtube_icon} />
//         <div className='social-text'>
//           <h1 className='social-top-text'>frogdude1123</h1>
//           <h3 className='social-bottom-text'>bottom text</h3>
//         </div>
//       </div>
//     </button>
//           <button id='social2' className='social-tab'>
//             <div className='line'></div>
//             <div className='social-tab-background'>
//               <img className='social-icon' src={discord_icon} />
//               <div className='social-text'>
//                 <h1 className='social-top-text'>frogdude1123#8079</h1>
//                 <h3 className='social-bottom-text'>bottom text</h3>
//               </div>
//             </div>
//           </button>
//           <button id='social3' className='social-tab'>
//             <div className='line'></div>
//             <div className='social-tab-background'>
//               <img className='social-icon' src={discord_icon} />
//               <div className='social-text'>
//                 <h1 className='social-top-text'>frogdude1124#3616</h1>
//                 <h3 className='social-bottom-text'>bottom text</h3>
//               </div>
//             </div>
//           </button>
//           <button id='social4' className='social-tab'>
//             <div className='line'></div>
//             <div className='social-tab-background'>
//               <img className='social-icon' src={discord_icon} />
//               <div className='social-text'>
//                 <h1 className='social-top-text'>frogdude1125#3709</h1>
//                 <h3 className='social-bottom-text'>bottom text</h3>
//               </div>
//             </div>
//           </button>
//           <button id='social5' className='social-tab cursor-pointer' onClick={openSteamLink}>
//             <div className='line'></div>
//             <div className='social-tab-background'>
//               <img className='social-icon' src={steam_icon} />
//               <div className='social-text'>
//                 <h1 className='social-top-text'>frogdude1123</h1>
//                 <h3 className='social-bottom-text'>bottom text</h3>
//               </div>
//             </div>
//           </button>
//           <button id='social6' className='social-tab cursor-pointer' onClick={openSpotifyLink}>
//             <div className='line'></div>
//             <div className='social-tab-background'>
//               <img className='social-icon' src={spotify_icon} />
//               <div className='social-text'>
//                 <h1 className='social-top-text'>frogdude1123</h1>
//                 <h3 className='social-bottom-text'>bottom text</h3>
//               </div>
//             </div>
//           </button>
//           <button id='social7' className='social-tab cursor-pointer' onClick={openGithubLink}>
//             <div className='line'></div>
//             <div className='social-tab-background'>
//               <img className='social-icon' src={github_icon} />
//               <div className='social-text'>
//                 <h1 className='social-top-text'>frog1123</h1>
//                 <h3 className='social-bottom-text'>bottom text</h3>
//               </div>
//             </div>
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// class Socials extends Component {
//   state = {
//     info: [
//       { id: 1, topText: "youtube", bottomText: "bottom text", src: youtube_icon, link: "https://www.youtube.com/channel/UCNTeMcd7BDOuNrVf1yRGZlA", noLink: false },
//       { id: 2, topText: "discord", bottomText: "bottom text", src: discord_icon, noLink: true },
//       { id: 3, topText: "discord2", bottomText: "bottom text", src: discord_icon, noLink: true },
//       { id: 4, topText: "discord3", bottomText: "bottom text", src: discord_icon, noLink: false },
//       { id: 5, topText: "steam", bottomText: "bottom text", src: steam_icon, link: "https://steamcommunity.com/id/frogdude1123/", noLink: false },
//       { id: 6, topText: "spotify", bottomText: "bottom text", src: spotify_icon, link: "https://open.spotify.com/user/ckenvyd4xokwet9bbir3hfxn9?si=bbda1b6ab230463b", noLink: false },
//       { id: 7, topText: "github", bottomText: "bottom text", src: github_icon, link: "https://github.com/frog1123", noLink: false }
//     ]
//   };
//   render() {
//     return (
//       <div id='socials' className='gradient-border'>
//         <h1 className='big-text title-text'>
//           <span className='gradient-text'>SOCIALS</span>
//         </h1>
//         <div id='socials-grid'>
//           {this.state.info.map((info) => (
//             <Social id={`social${info.id}`} key={info.id} info={info} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
