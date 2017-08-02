import React, { Component } from 'react';
import logo from './hacksclogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Splash />
        <div className="seperator"> </div>
        <div className="row">
          <Track text="Future of Los Angeles" column="col-4" textcolor="#FFFFFF" bgcolor="#0BDDEF" />
          <Track text="Health + Active Lifestyle" column="col-4" textcolor="#FFFA00" bgcolor="#F9728D" />
          <Track text="Art + Culture" column="col-4" textcolor="#0BDDEF" bgcolor="#FFFA00" />
        </div>
        <div className="seperator"> </div>
        <Schedule />
      </div>
    );
  }
}

class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="splash-logo"></div>
        <div className="splash-content"><h3> Welcome to Los Angeles, the warm and beautiful city of angels and dreamers. 
        On the University of Southern California campus this fall, you are invited to a 36 hour 
        technology hackathon that seeks to change the future of our beloved city. Alongside 1,000 
        hackers and designers, you will re-imagine what a 21st century city should look like and 
        apply your ideas to the test. <br/> <br/>

        We hope you will join us. <br/> <br/>

        —HackSC Team

        <br/> <br/>
        </h3>
        <a href="http://www.google.com"><button type="button" className="apply"> APPLY NOW </button></a>
        <a href="http://www.google.com"><button type="button" className="sponsor"> SPONSOR </button></a>
        </div>
        <div className="la-sky"></div>
        <div className="la-moon"></div>
      </div>
    )
  }
}

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <h1>Schedule here. CSS not yet implemented.</h1>
        <h3>Placeholder text.</h3>
      </div>
    )
  }
}

class Event extends Component {

}

class Track extends Component {
  render() {
    return (
      <div style={{color: this.props.textcolor, backgroundColor: this.props.bgcolor}} className={["track", this.props.column].join(' ')}>
        <h1>{this.props.text}</h1>
        <p> I don't know what to put here so this is Filler text.
        I don't know what to put here so this is Filler text.
        I don't know what to put here so this is Filler text.
        I don't know what to put here so this is Filler text.
        I don't know what to put here so this is Filler text.</p>
      </div>
    )
  }
}

export default App;
