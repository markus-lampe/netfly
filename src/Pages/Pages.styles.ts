import { styled } from 'styled-components'

export const Page = styled.div`
  height:           100%;
  overflow:       hidden;
  transition: height .5s;

  &.hidden {
    height: 0;
  }
`
