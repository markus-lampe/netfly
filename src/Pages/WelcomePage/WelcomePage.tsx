import React from 'react'

import { Button, Link, Page } from 'Components'

import { Footer } from './Components'

import {
  Buttons,
  Copyright,
  Footer,
  Links
} from './WelcomePage.styles'

interface IWelcomePage {
  visible: boolean
}

const WelcomePage = ({ visible }: IWelcomePage) => {



  return (
    <Page visible={visible}>


      <Buttons>
        <Button></Button>
      </Buttons>

      <Footer />
    </Page>
  )
}

export default WelcomePage
