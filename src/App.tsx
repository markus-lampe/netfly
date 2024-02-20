import React  from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const LookAndFeel = createGlobalStyle`

`

const Container = styled.div`
  background: #F0F0F0;
  height: 100%;
`

const Header = styled.header`
  display: flex;
  height: 48px;
`

const Icon = styled.div`
  display: inline-block;
  aspect-ratio: 1;
  height: 24px;
  padding: 16px;
  cursor: pointer;
`

const Separator = styled.div`
  margin: 0 16px;
  border-bottom: 1px solid black;
`

const Title = styled.div`
  display: inline-block;
`

const App = () => {


  return (
    <Container>
      <LookAndFeel />
      <Header>
        <Icon className="material-symbols-outlined">chat_bubble</Icon>
        <Title>netfly.io</Title>
        <Icon className="material-symbols-outlined">bug_report</Icon>
        <Icon className="material-symbols-outlined">menu</Icon>
      </Header>
      <Separator/>

    </Container>
  )
}

export default App
