import React from 'react'

import { Messenger, Setup, Welcome } from "./Pages";

import AppContext      from './App.context'
import { LookAndFeel } from './App.styles'

const App = () => {


  return (
    <AppContext.Provider value={{ lang: 'en', mode: 'light', page: 'welcome' }}>
      <LookAndFeel />
      <Welcome />
      <Setup />
      <Messenger />
    </AppContext.Provider>
  )
}

export default App
