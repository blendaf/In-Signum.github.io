import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Clarkson',Helvetica,sans-serif;
    color: rgb(39,49,56);
  }
`

const Main = styled.div`
  width: 100%;
  height: 800px;
`
const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
`

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <Navbar dist={'480px'} />
      <Footer />
    </>
  )
}
