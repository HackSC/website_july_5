import React, { Component } from 'react';
import logo from './hacksclogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Splash />
        <div className="row">
          <Track text="Future of Los Angeles" column="col-4" textcolor="#FFFFFF" bgcolor="#0BDDEF" />
          <Track text="Health + Active Lifestyle" column="col-4" textcolor="#FFFA00" bgcolor="#F9728D" />
          <Track text="Art + Culture" column="col-4" textcolor="#0BDDEF" bgcolor="#FFFA00" />
        </div>
      </div>
    );
  }
}

class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <h1>splash</h1>
        <img src={logo} className="splash-logo"/>
        <h3>Welcome to THE BEST HACKATHON IN THE WORLD. coming september 2017.</h3>
      </div>
    )
  }
}

class Track extends Component {
  render() {
    return (
      <div style={{color: this.props.textcolor, backgroundColor: this.props.bgcolor}} className={["track", this.props.column].join(' ')}>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

export default App;
