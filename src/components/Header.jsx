import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Style.css";
import slack from "../img/slack.png";


function Header() {
  const linkStyle = {
    color: '#1d1d1d',
    fontSize: '16px'
  }

  const btnStyle = {
    backgroundColor: '#623369',
    fontSize: '16px',
    color: '#fff',
    fontWeight: '600'
    

  }
  return (
    <>
    <div class="navbar-header">     
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
        <img src={slack} width="100" height="35" class="d-inline-block align-top" alt="slack-brand" loading="lazy"/>
   </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mr-auto">      
      <NavDropdown title="Why Slack" id="basic-nav-dropdown" style={ linkStyle }>
        <NavDropdown.Item className="dropdown-item" href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item className="dropdown-item" href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item className="dropdown-item" href="#action/3.3">Something</NavDropdown.Item>    
        <NavDropdown.Item className="dropdown-item" href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
        <Nav.Link href="#solutions" style={ linkStyle }>Solutions</Nav.Link>           
      <NavDropdown title="Resources" style={ linkStyle } id="basic-nav-dropdown">
        <NavDropdown.Item className="dropdown-item" href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item className="dropdown-item" href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item className="dropdown-item"href="#action/3.3">Something</NavDropdown.Item>    
        <NavDropdown.Item className="dropdown-item" href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
            <Nav.Link href="#enterprise" style={ linkStyle }>Enterprise</Nav.Link>
            <Nav.Link href="#pricing" style={ linkStyle }>Pricing</Nav.Link>            
            </Nav>
            
          <Nav>
          <Nav.Link href="#contact-sales" style={ linkStyle }>Contact Sales</Nav.Link>
            <Nav.Link href="#signin" style={ linkStyle }>Sign In</Nav.Link>
            <Nav.Link className="btn btn-outline-primary mr-3" style={btnStyle}>Try for free</Nav.Link>
          </Nav>
    
         </Navbar.Collapse>
        </Navbar>
        </div>
    </>
  );
}

export default Header;
