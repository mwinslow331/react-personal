import React, { Component } from 'react';
import math from 'mathjs';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Router, Route, Link, browserHistory } from 'react-router';

class Dashboard extends Component {
  render() {

    return (
      <div className="body">
        <div className="Navbar">
          <Navigation/>
        </div>
        <div className="about">
          <About/>
        </div>
        <div className="projects">
          <Projects/>
        </div>
        <div className="contact">
          <Contact/>
        </div>
      </div>
    );
  }
}

// export default Dashboard;
