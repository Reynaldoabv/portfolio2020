import React, { useState } from 'react';

import Logo from '../../assets/LogoTransp2.png'

import './header.scss'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import { Link } from 'react-router-dom'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="header">
      <Navbar className="d-block d-lg-none wrapper-mobile" color="faded" >
        <NavbarBrand href="/" className="mr-auto">
          <img className="img-fluid logo-mobile" src={Logo} alt="Logo-RB"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="navbarToggler navbar-dark bg-dark " />
        <Collapse isOpen={!collapsed} navbar >
          <Nav navbar>
            <NavItem>
              <Link className="links-mobile" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="links-mobile" to="/about-me">About Me</Link>
            </NavItem>
            <NavItem>
              <Link className="links-mobile" to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link className="links-mobile" to="/services">Services</Link>
            </NavItem>
            <NavItem>
              <Link className="links-mobile" to="/contacts">Contacts</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>


      <Navbar className="d-none d-lg-block">  
        <div className="wrapper">
          <NavItem className="navItem">
            <Link to="/" className=""><img className="img-fluid logo" src={Logo} alt="Logo-RB"/></Link>
          </NavItem>
          <NavItem className="navItem">
            <Link className="links" to="/">Home</Link>
          </NavItem>          
          <NavItem className="navItem">
            <Link className="links" to="/about-me">About Me</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link className="links" to="/projects">Projects</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link className="links" to="/services">Services</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link className="links" to="/contacts">Contacts</Link>
          </NavItem>
        </div>
      </Navbar>
      
      
    </div>
  );
}

export default Header;