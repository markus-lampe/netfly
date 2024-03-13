import { styled } from 'styled-components'

export const Container = styled.div`
  display:          flex;
  flex-direction: column;
  overflow:       hidden;
  position:     absolute;

  &.hidden {
    height:            0;


  }

  &.visible {
    height:         100%;
  }
`
