import { createGlobalStyle } from 'styled-components'

const LookAndFeel = createGlobalStyle`
  @import url('fonts/noto-sans-bold.ttf');
  @import url('fonts/noto-sans-regular.ttf');

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
