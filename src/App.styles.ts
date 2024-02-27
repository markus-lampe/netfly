import { createGlobalStyle } from 'styled-components'

export const LookAndFeel = createGlobalStyle`
  @import url('fonts/red-hat-display.ttf');

  body, html, #app {
    font-family: 'Red Hat Display', sans-serif;

    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;

    background: hwb(212 8% 25%);
  }
`
