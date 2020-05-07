import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title } from '../components/Fragments'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
`

export default () => {
  return (
    <>
      <Navbar dist={'160px'} />
      <Container>
        <Title>The Product</Title>
      </Container>
      <Footer />
    </>
  )
}
