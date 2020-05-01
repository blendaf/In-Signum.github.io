import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
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

const ProfileBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileText = styled.div`
  padding: 20px 40px;
  padding-bottom: 40px;
`

const Picture = styled.img`
  width: 200px;
  border-radius: 20px;
`

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <Navbar dist={'160px'} />

      <Container>
        <ProfileBoxWrapper>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/placeholder.jpg" />
            </ProfilePicture>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ProfileText>
          </ProfileBox>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/placeholder.jpg" />
            </ProfilePicture>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ProfileText>
          </ProfileBox>
        </ProfileBoxWrapper>
        <ProfileBoxWrapper>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/placeholder.jpg" />
            </ProfilePicture>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ProfileText>
          </ProfileBox>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/placeholder.jpg" />
            </ProfilePicture>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ProfileText>
          </ProfileBox>
        </ProfileBoxWrapper>
      </Container>
      <Footer />
    </>
  )
}
