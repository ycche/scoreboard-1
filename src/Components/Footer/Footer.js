import React from 'react'
import {FooterContainer,
  FooterWrapper,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkH1,
  LinkItem,
  BottomBarWrapper,
  BottomLogo,
  BottomBar,
  BottomIconsWrapper,
  Icon,
  BottomP
} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll';

import {FaTwitter,FaFacebookF,FaYoutube,FaInstagram} from 'react-icons/fa'

function Footer() {
  const toggleHome = () =>{
    scroll.scrollToTop();
  }
  return (
    <FooterContainer>
      <FooterWrapper>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkH1>About Us</LinkH1>
              <LinkItem to='/'>Blog</LinkItem>
              <LinkItem to='/'>Social Media</LinkItem>
              <LinkItem to='/'>Careers</LinkItem>
              <LinkItem to='/'>News</LinkItem>
            </LinkItems>
            <LinkItems>
              <LinkH1>Business</LinkH1>
              <LinkItem to='/'>Resources</LinkItem>
              <LinkItem to='/'>Dashboard</LinkItem>
              <LinkItem to='/'>Solution Overview</LinkItem>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkH1>Help & Support</LinkH1>
              <LinkItem to='/'>Contact</LinkItem>
              <LinkItem to='/'>Support</LinkItem>
              <LinkItem to='/'>Talk to a rep</LinkItem>
            </LinkItems>
            <LinkItems>
              <LinkH1>Company</LinkH1>
              <LinkItem to='/'>Become a partner</LinkItem>
              <LinkItem to='/'>Learn More</LinkItem>
              <LinkItem to='/'>About</LinkItem>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>
        <BottomBar>
        <BottomBarWrapper>
          <BottomLogo to = '/' onClick={toggleHome}>
            BetterNotepad
          </BottomLogo>


          <BottomIconsWrapper>
            <Icon href = 'https://twitter.com/' >
              <FaTwitter/>
            </Icon>
            <Icon href = 'https://facebook.com/'>
              <FaFacebookF/>
            </Icon>
            <Icon href = 'https://instagram.com'>
              <FaInstagram/>
            </Icon>
            <Icon href = 'https://youtube.com/'>
              <FaYoutube/>
            </Icon>
          </BottomIconsWrapper>
        </BottomBarWrapper>
        </BottomBar>
        <BottomP> Website and app design/creation by Yi Chen Che </BottomP>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
