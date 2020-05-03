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
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
`

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: 500;
  padding-top: 20px;
  margin: 0;
  padding-bottom: ${(props) => (props.product ? '0px' : '40px')};
`
const ProfileBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 0px;
`
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: flex-start;
  align-items: center;
`
const ProfileName = styled.div`
  font-size: 25px;
  font-weight: 800;
  padding: 10px 0;
`
const ProfileText = styled.div`
  font-size: 15px;
  letter-spacing: 1px;
  width: 250px;
`
const ProfilePicture = styled.div`
  width: 250px;
`
const Picture = styled.img`
  width: 100%;
  border-radius: 250px;
`

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <Navbar dist={'160px'} />
      <Container>
        <Title>The Team</Title>
        <ProfileBoxWrapper>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/blenda.jpg" />
            </ProfilePicture>
            <ProfileName>Blenda Fröjdh</ProfileName>
            <ProfileText>Sweden, Stockholm</ProfileText>
            <ProfileText>BCs in Information Technology</ProfileText>
            <ProfileText>
              MCs in ICT Innovation and Human-Computer Interaction
            </ProfileText>
            <ProfileText>
              Favorite weird food combination: Tortillas with Swedish caviar -
              don’t knock it until you try it.
            </ProfileText>
          </ProfileBox>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/DavidJ.png" />
            </ProfilePicture>
            <ProfileName>David Jacobsson</ProfileName>
            <ProfileText>Sweden, Stockholm</ProfileText>
            <ProfileText>BCs in Information Technology</ProfileText>
            <ProfileText>MCs in Autonomous Systems</ProfileText>
            <ProfileText>
              Greatest Irony: Loves cats and cheese, Is allergic to both.
            </ProfileText>
          </ProfileBox>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/blenda.jpg" />
            </ProfilePicture>
            <ProfileName>Shujian Guan</ProfileName>
            <ProfileText>China, Shanghai</ProfileText>
            <ProfileText>BCs in Computer Science</ProfileText>
            <ProfileText>
              MCs in Human-Computer Interaction and Design (EIT Digital)
            </ProfileText>
            <ProfileText>
              Favorite weird food combination: Tortillas with Swedish caviar -
              don’t knock it until you try it.
            </ProfileText>
          </ProfileBox>
        </ProfileBoxWrapper>
        <ProfileBoxWrapper>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/joana.jpg" />
            </ProfilePicture>
            <ProfileName>Joana Lameiras</ProfileName>
            <ProfileText>Portugal, Coimbra</ProfileText>
            <ProfileText>BCs in Informatics Engineering</ProfileText>
            <ProfileText>MCs in Visual Computing and Communication</ProfileText>
            <ProfileText>
              Guilty pleasure: I love all kinds of chick flicks, especially the
              extra cheesy, cliché ones.
            </ProfileText>
          </ProfileBox>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/blenda.jpg" />
            </ProfilePicture>
            <ProfileName>Haichuan Wang</ProfileName>
            <ProfileText>Shenzhen, China</ProfileText>
            <ProfileText>BCs in Electrical engineering</ProfileText>
            <ProfileText>MCs in Autonomous system</ProfileText>
            <ProfileText>
              Favorite weird food combination: Tortillas with Swedish caviar -
              don’t knock it until you try it.
            </ProfileText>
          </ProfileBox>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/placeholder.jpg" />
            </ProfilePicture>
            <ProfileName>Adrian Neila Serrano</ProfileName>
            <ProfileText>Sweden, Stockholm</ProfileText>
            <ProfileText>BCs in Information Technology</ProfileText>
            <ProfileText>MCs in Autonomous Systems</ProfileText>
            <ProfileText>
              Greatest Irony: Loves cats and cheese, Is allergic to both.
            </ProfileText>
          </ProfileBox>
        </ProfileBoxWrapper>
      </Container>
      <Footer />
    </>
  )
}
