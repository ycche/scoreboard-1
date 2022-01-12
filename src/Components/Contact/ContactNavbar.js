import React from 'react'
import {Nav, NavbarContainer, NavLogo} from '../Navbar/NavbarElements'
function ContactNavbar() {
  return (

    <Nav>
      <NavbarContainer>
        <NavLogo to= '/'>Notepad</NavLogo>
      </NavbarContainer>
    </Nav>

  )
}

export default ContactNavbar
