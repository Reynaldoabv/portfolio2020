import React, { useState } from 'react';

import Logo from '../../assets/LogoTransp2.png'

import './header.scss'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import { Link, NavLink } from 'react-router-dom'

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
              <NavLink className="links-mobile" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="links-mobile" to="/about-me">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="links-mobile" to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="links-mobile" to="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="links-mobile" to="/contacts">Contacts</NavLink>
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
            <NavLink className="links" to="/" exact activeClassName="current">Home</NavLink>
          </NavItem>          
          <NavItem className="navItem">
            <NavLink className="links" to="/about-me" exact activeClassName="current">About Me</NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink className="links" to="/projects" exact activeClassName="current">Projects</NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink className="links" to="/services" exact activeClassName="current">Services</NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink className="links" to="/contacts" exact activeClassName="current">Contacts</NavLink>
          </NavItem>
        </div>
      </Navbar>
      
      
    </div>
  );
}

export default Header;