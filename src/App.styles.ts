import { createGlobalStyle, styled } from 'styled-components'

export const LookAndFeel = createGlobalStyle`
  @import url('fonts/red-hat-display.ttf');




  body, html, #app {
    font-family: 'Red Hat Display', sans-serif;

    height:     100%;
    margin:        0;
    padding:       0;
    overflow: hidden;

    background: hwb(240 10% 25%);
  }
`

export const Pages = styled.div`
  height:       100%;
  overflow:   hidden;
`

export const Overlays = styled.div`
  height:       100%;
  overflow:   hidden;
`
