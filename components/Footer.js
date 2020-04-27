import styled from 'styled-components'

const FooterWrapper = styled.div`
  display: block;
  width: 100%;
  background-color: white;
  color: black;
  font-size: 10px;
`

const Container = styled.div`
  width: 80%;
  max-width: 960px;
  box-sizing: border-box;
  margin: 0px auto;
  padding: 0px 20px;
`

const Footer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 50px 0px;
`

const FooterContent = styled.div`
  flex: 1 1 0%;
  margin: 0px 4%;
`

const FooterTitle = styled.h2`
  line-height: 1.25;
  font-size: 20px;
  font-weight: bold;
  margin: 0px 0px 5px;
`
const FooterText = styled.p`
  line-height: 1.25;
  font-size: 15px;
  font-weight: lighter;
`

export default () => {
  return (
    <FooterWrapper>
      <Container>
        <Footer>
          <FooterContent>
            <FooterTitle>InSignum</FooterTitle>
            <FooterText>
              InSignum is a company dedicated to make the world more accessible
              to people that are hard of hearing through technology.
            </FooterText>
          </FooterContent>

          <FooterContent>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterText>InSignum@gmail.com</FooterText>
          </FooterContent>

          <FooterContent>
            <FooterText>
              Icons used on the page are made by
              <a href="https://github.com/atisawd">Atisa</a> from
              www.boxicons.com and are licensed by CC BY 4.0
            </FooterText>
          </FooterContent>
        </Footer>
      </Container>
    </FooterWrapper>
  )
}
