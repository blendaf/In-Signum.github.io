import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title } from '../components/Fragments'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
`
export default () => {
  return (
    <>
      <Navbar dist={'480px'} />

      <Footer />
    </>
  )
}
