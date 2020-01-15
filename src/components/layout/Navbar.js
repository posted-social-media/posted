import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';


export default function NavBar (props) {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><i class="fas fa-home"></i></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><i class="fas fa-user"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=""><i class="fas fa-store"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=""><i class="fas fa-cog"></i></NavLink>
            </NavItem>
          </Nav>
          <NavbarText>posted</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}