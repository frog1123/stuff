import React from 'react';
// components
import HeadContent from './components/HeadContent/HeadContent.jsx';
import AudioControls from './components/AudioControls/AudioControls.jsx';
import Socials from './components/Socials/Socials.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';

function App() {
  return (
    <React.Fragment>
      <HeadContent/>
      <br/>
      <AudioControls/>
      <br/>
      <Socials/>
      <br/>
      <AboutMe/>
    </React.Fragment>
  );
}

export default App;