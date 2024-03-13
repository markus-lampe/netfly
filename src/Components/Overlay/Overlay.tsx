import React, { ReactNode } from 'react'

import { Container } from './Overlay.styles'

interface IOverlay {
  children: ReactNode
}

const Overlay = ({ children }: IOverlay) => {

  return (
    <Container>
      {children}

    </Container>
  )
}

export default Overlay
