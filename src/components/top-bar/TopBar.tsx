import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Navbar, NavbarToggler, Collapse,
  Nav, NavItem, NavLink,
} from 'reactstrap';
import { HistoryProps } from '../../interfaces';
import './TopBar.scss';

function NavigationBar(props: HistoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const preventDefault = (event: React.MouseEvent<any, MouseEvent>) => {
    event.preventDefault();
    props.history.push('/');
  };

  const path = props.history.location.hash;

  return (
    <Navbar expand="md" className="navbar-wrapper">
      <NavbarToggler
        onClick={toggleNav}
        data-testid="navbar-toggler"
        className="navbar navbar-light outline-none"
      />
      <Collapse isOpen={isOpen} navbar data-testid="navbar-collapse" className="h-100">
        <Nav className="mr-auto h-100 pl-2 pr-2" navbar>
          <NavItem className="navbar-navitem font-size-16">
            <NavLink href="/" onClick={preventDefault}>
              Ahmad Ichsan Baihaqi<b className="font-size-12 pl-2">Profile</b>
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto h-100" navbar>
          <NavItem className="navbar-navitem pl-2 pr-2" active={!path || path.includes('#about-me')}>
            <NavLink className="font-size-12" href="#about-me">
              About Me
            </NavLink>
          </NavItem>
          <NavItem className="navbar-navitem pl-2 pr-2" active={path.includes('#skills')}>
            <NavLink className="font-size-12" href="#skills">
              Skills
            </NavLink>
          </NavItem>
          <NavItem className="navbar-navitem pl-2 pr-2" active={path.includes('#experiences')}>
            <NavLink className="font-size-12" href="#experiences">
              Experiences
            </NavLink>
          </NavItem>
          <NavItem className="navbar-navitem pl-2 pr-2" active={path.includes('#projects')}>
            <NavLink className="font-size-12" href="#projects">
              Projects
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default withRouter(NavigationBar);
