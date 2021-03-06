import React, { Component } from 'react';
import math from 'mathjs';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Dashboard from './Dashboard';
import { Router, Route, Link, browserHistory } from 'react-router';


class App extends Component {
  render() {

    return (
      <div className="body">
        <div className="navbar">
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

export default App;

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//
//     }
//   }
//
//   render() {
//     return(
//       <Router history={browserHistory}>
//         <Route path='/' component={Dashboard}>
//           <Route path='about' component={About}/>
//           <Route path='projects' component={Projects}/>
//           <Route path='contact' component={Contact}/>
//         </Route>
//       </Router>
//     )
//   }
// }
//
// export default App;
