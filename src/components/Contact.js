import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router';

class Contact extends Component {

  render(){
    return(
      <Panel>
        <Panel.Footer>
          <div className="contact-logos">
            <h2>Follow My Projects, Career and Interests!</h2>
              <a className="btn btn-social-icon btn-twitter">
                <span className="fa fa-twitter"><a href="https://twitter.com/mwinslow331"></a></span>
              </a>
              <a className="btn btn-social-icon btn-github">
                <span className="fa fa-github"><a href="https://github.com/mwinslow331"></a></span>
              </a>
              <a className="btn btn-social-icon btn-linkedin">
                <span className="fa fa-linkedin"><a href="https://www.linkedin.com/in/mwinslow331/"></a></span>
              </a>
          </div>
        </Panel.Footer>
      </Panel>
    )
  }
}

export default Contact;
