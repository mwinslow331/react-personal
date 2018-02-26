import React, { Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Greeting from './Greeting';

class Navigation extends Component {

  render() {
    return(
      <div className="navigation-bar">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Greeting/>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>
                <NavDropdown eventKey={3} title="Explore" id="basic-nav-dropdown" >
                  <MenuItem eventKey={3.1}>About Me</MenuItem>
                  <MenuItem eventKey={3.2}>Projects</MenuItem>
                  <MenuItem eventKey={3.3}>Contact Me</MenuItem>
                </NavDropdown>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;
