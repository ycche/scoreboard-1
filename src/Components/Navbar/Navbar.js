import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem,NavLinks,
NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
function Navbar({toggle}) {
  const toggleHome = () =>{
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to= '/' onClick={toggleHome}>BetterNotepad</NavLogo>

          <MobileIcon onClick = {toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="about"
              smooth = {true} duration = {300} spy = {true}
              exact = 'true' offset = {-80}> About </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="usage" smooth = {true} duration = {300} spy = {true}
              exact = 'true' offset = {-80}> Usage </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="support" smooth = {true} duration = {300} spy = {true}
              exact = 'true' offset = {-80}> Support </NavLinks>
            </NavItem>

          </NavMenu>

          <NavBtn>
            <NavBtnLink to= "/"> Download </NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>



  )
}

export default Navbar
