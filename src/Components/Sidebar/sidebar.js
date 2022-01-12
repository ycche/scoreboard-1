import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute,SidebarWrapper
} from './sidebarElements';

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer onClick= {toggle} isOpen = {isOpen}>
      <Icon onClick = {toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">
            About
          </SidebarLink>
          <SidebarLink to="usage">
            Usage
          </SidebarLink>
          <SidebarLink to="support">
            Support
          </SidebarLink>

          <SideBtnWrap>
            <SidebarRoute to = "/download">
              Download
            </SidebarRoute>
          </SideBtnWrap>

          </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
