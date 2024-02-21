import React from 'react'

import {
  BugReportIcon,
  ChatIcon,
  MenuIcon,
} from 'Icons'

import {
  Container,
  IconContainer,
  Brand,
} from './Header.styles'


const Header = () => {

  return (
    <Container>
      <IconContainer>
        <ChatIcon size={40} />
      </IconContainer>
      <Brand>netfly.io</Brand>
      <IconContainer>
        <BugReportIcon size={40} />
      </IconContainer>
      <IconContainer>
        <MenuIcon size={40} />
      </IconContainer>
    </Container>
  )
}

export default Header
