import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title, Subtitle } from '../components/Fragments'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
`
const Text = styled.p`
  margin: 2em 0;
  line-height: 1.2;
`

const FigureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 40px;
`
const Figure = styled.img`
  width: 100%;
`

const FigureText = styled.h3`
  font-weight: 500;
  font-style: italic;
  margin: 0;
`

export default () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Our Business Cost structure</Title>
        <Subtitle>Some</Subtitle>
        <Text></Text>
        <Subtitle>Some</Subtitle>
        <Text></Text>
        <Subtitle>Some</Subtitle>
        <Text></Text>
        <Subtitle>Some</Subtitle>
        <Text></Text>
        <Subtitle>Some</Subtitle>
        <Text></Text>
        <Subtitle>Some</Subtitle>
        <Text></Text>
        <Subtitle>Some</Subtitle>
        <Text></Text>
        <Subtitle>References</Subtitle>
        <Text></Text>
      </Container>
      <Footer />
    </>
  )
}
