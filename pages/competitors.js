import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
`

export default function Index() {
  return (
    <>
      <Navbar dist={'320px'} />

      <Footer />
    </>
  )
}
