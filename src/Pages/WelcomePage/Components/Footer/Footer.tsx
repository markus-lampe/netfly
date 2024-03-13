import React from 'react'

import { Link, Text } from 'Components'

import { Container, Copyright, Links } from './Footer.styles'

const Footer = () => {


  return (
    <Container>
      <Copyright>
        Copyright &copy; 2024 &mdash; Markus Lampe
      </Copyright>
      <Links>
        <Link onClick={() => openOverlay('about')}>
          About
        </Link>
        <Link onClick={() => openOverlay('contact')}>
          Contact
        </Link>
        <Link onClick={() => openOverlay('impress')}>
          Impress
        </Link>
      </Links>
    </Container>
  )
}

export default Footer
