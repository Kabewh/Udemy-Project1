import 'bulma/css/bulma.css';
import React, { useState } from "react";
import ProfileCard from './components/ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
return (
  <>
  <section className='hero is-primary'>
    <div className='hero-body'>
    <p className='title'>Personal Digital Assistants</p>

    </div>
  </section>
    <div className='container'>
      <section className='section'>
        <div className='columns'>
          <div className='column is-4'>
            <ProfileCard title={"Cortana"} handle={"@cortana32"} image={CortanaImage} description="Cortana was created by Microsoft"/>
          </div>
          <div className='column is-4'>
          <ProfileCard title={"Alexa"} handle={"@alexa99"} image={AlexaImage} description="Alexa wth???"/>
          </div>
          <div className='column is-4'>
          <ProfileCard title={"Siri"} handle={"@siri01"} image={SiriImage} description="Apple's sclave"/>
          </div>
        </div>
      </section>
    </div>
  </>
  );
}
export default App;
