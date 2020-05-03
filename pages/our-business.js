import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      <Navbar dist={'480px'} />
      <Footer />
    </>
  )
}
