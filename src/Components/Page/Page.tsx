import React, { ReactNode } from 'react'

import ScrollBar from 'Components/ScrollBar'

import { Buttons, Container } from './Page.styles'

interface IPage {
  children: ReactNode
  visible: boolean
}

const Page = ({ children, visible }: IPage) => {

  return (
    <Container className={visible ? 'visible' : 'hidden'}>
      {children}

    </Container>
  )
}

export default Page
