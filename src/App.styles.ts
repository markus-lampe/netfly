import { createGlobalStyle } from 'styled-components'

const LookAndFeel = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  body, html, #app {
    height:                         100%;
    margin:                            0;
    padding:                           0;

    font-family: 'Noto Sans', sans-serif;
  }

  body {
    background-color:            #F0F0F0;
    color:                       #333333;
  }
`

export {
  LookAndFeel,
}
