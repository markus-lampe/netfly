import React  from 'react'
import styled from 'styled-components'

import { Messenger } from "./Pages";

import {
  LookAndFeel,

} from './App.styles'

const Container = styled.div`
  background: #F0F0F0;
  height: 100%;
`

const App = () => {


  return (
    <Container>
      <LookAndFeel />
      <Messenger />
    </Container>
  )
}

export default App
