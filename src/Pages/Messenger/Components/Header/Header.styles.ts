import { styled } from 'styled-components'

const Container = styled.header`
  position: static;
  padding:  0 12px;
  height:     48px;
  display:    flex;
  gap:         5px;
`

const IconContainer = styled.div`
  display: inline-block;
  padding: 4px;
`

const Brand = styled.div`
  flex-grow: 1;

  font-size:   24px;
  line-height: 48px;
  font-weight: bold;
`

export {
  Container,
  IconContainer,
  Brand,
}
