import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title } from '../components/Fragments'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
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

export default () => {
  return (
    <>
      <Navbar dist={'320px'} />
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
              <Picture src="/shujian.png" />
            </ProfilePicture>
            <ProfileName>Shujian Guan</ProfileName>
            <ProfileText>China, Shanghai</ProfileText>
            <ProfileText>BCs in Computer Science</ProfileText>
            <ProfileText>
              MCs in Human-Computer Interaction and Design (EIT Digital)
            </ProfileText>
            <ProfileText>
              Call of duty: Always ready for liberating blueberry ice cream
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
              <Picture src="/haichuan.jpg" />
            </ProfilePicture>
            <ProfileName>Haichuan Wang</ProfileName>
            <ProfileText>Shenzhen, China</ProfileText>
            <ProfileText>BCs in Electrical engineering</ProfileText>
            <ProfileText>MCs in Autonomous system</ProfileText>
            <ProfileText>
              What I love about InSignum: I love to work with a multinational
              team where everyone can come up with different cool ideas.
            </ProfileText>
          </ProfileBox>
          <ProfileBox>
            <ProfilePicture>
              <Picture src="/adrian.jpg" />
            </ProfilePicture>
            <ProfileName>Adrian Neila Serrano</ProfileName>
            <ProfileText>Sweden, Stockholm</ProfileText>
            <ProfileText>BCs in Information Technology</ProfileText>
            <ProfileText>MCs in Autonomous Systems</ProfileText>
            <ProfileText>
              Admission of facts: Has more imagination than time to express all
              of it. Adores food and eating.
            </ProfileText>
          </ProfileBox>
        </ProfileBoxWrapper>
      </Container>
      <Footer />
    </>
  )
}
