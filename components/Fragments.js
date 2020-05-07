import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: 500;
  padding-top: ${(props) => (props.product ? '40px' : '20px')};
  padding-bottom: ${(props) => (props.product ? '0px' : '40px')};
`
export const Subtitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
`
