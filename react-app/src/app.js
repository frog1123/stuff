import React from 'react';
// components
import HeadContent from './components/HeadContent/HeadContent.jsx';
import AudioControls from './components/AudioControls/AudioControls.jsx';
import List from './components/List/List.jsx'
import Socials from './components/Socials/Socials.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';

function App() {
  return (
    <React.Fragment>
      <HeadContent/>
      <br/>
      <AudioControls/>
      <br/>
      <List/>
      <br/>
      <Socials/>
      <br/>
      <AboutMe/>
      <br/>
    </React.Fragment>
  );
}

export default App;