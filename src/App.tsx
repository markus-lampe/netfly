import React, { useState } from 'react'

import { MessengerPage, SetupPage, WelcomePage } from "./Pages";

import { LookAndFeel, Pages } from './App.styles'

const App = () => {
  const [page, setPage] = useState('welcome')

  return (
    <>
      <LookAndFeel />

      <Pages>
        <WelcomePage   visible={page === 'welcome'}/>
        <SetupPage     visible={page === 'setup'} />
        <MessengerPage visible={page === 'messenger'} />
      </Pages>
      <Overalays>

      </Overalays>
    </>
  )
}

export default App
