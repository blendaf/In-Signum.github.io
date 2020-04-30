import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { BatteryCharging } from '@styled-icons/boxicons-solid/BatteryCharging'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
  }
`

const Header = styled.div`
  width: 100%;
  height: 80vh;

  background-image: url(${'/logo-small.png'});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Main = styled.div`
  width: 100%;
  height: 800px;
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const InterviewBox = styled.div`
  display: flex;
  padding: 40px 0px;
`

const InterviewText = styled.div`
  width: 50%;
  display: flex;
  padding: 40px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.left ? 'flex-start' : 'flex-end')};
  padding-left: ${(props) => (props.left ? '0px' : '60px')};
  padding-right: ${(props) => (props.left ? '60px' : '0px')};
  text-align: ${(props) => (props.left ? 'left' : 'right')};
`

const InterviewTextMain = styled.div`
  width: 80%;
`

const InterviewTextName = styled.div`
  padding-top: 20px;
  font-weight: 600;
`

const InterviewPicture = styled.div`
  width: 50%;
  display: flex;
  justify-content: ${(props) => (props.left ? 'flex-end' : 'flex-start')};
  height: 300px;
  padding: 0px;
  padding-left: ${(props) => (props.left ? '0px' : '60px')};
  padding-right: ${(props) => (props.left ? '60px' : '0px')};
`

const Picture = styled.img`
  width: 250px;
`

const Product = styled.div`
  width: 100%;
  padding: 60px 0;
  background-color: #e9f0f5;
  color: #000;
`

const ProductTitle = styled.div`
  font-size: 40px;
  text-align: center;
  padding-top: 40px;
`

const ProductSubTitle = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 10px 0;
`

const ProductPicture = styled.div`
  padding: 40px 0;
`

const ProductImage = styled.div`
  background-color: white;
  width: 400px;
  height: 400px;
  margin: 0 auto;
`

const ProductDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Description = styled.div`
  padding: 20px;
  text-align: center;
  width: 120px;
  font-size: 20px;
`

const DescriptionIcon = styled.div``

const StyledBattery = styled(BatteryCharging)`
  width: 50px;
`

export default function Index() {
  return (
    <>
      <GlobalStyle />

      <Header>
        <Navbar dist={'0px'} />
      </Header>
      <Main>
        <Container>
          <InterviewBox>
            <InterviewText>
              <InterviewTextMain>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </InterviewTextMain>
              <InterviewTextName>Blenda Fröjdh, Stockholm</InterviewTextName>
            </InterviewText>
            <InterviewPicture>
              <Picture src="/placeholder.jpg" />
            </InterviewPicture>
          </InterviewBox>
          <InterviewBox>
            <InterviewPicture left>
              <Picture src="/placeholder.jpg" />
            </InterviewPicture>
            <InterviewText left>
              <InterviewTextMain left>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </InterviewTextMain>
              <InterviewTextName>Blenda Fröjdh, Stockholm</InterviewTextName>
            </InterviewText>
          </InterviewBox>
          <InterviewBox>
            <InterviewText>
              <InterviewTextMain>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </InterviewTextMain>
              <InterviewTextName>Blenda Fröjdh, Stockholm</InterviewTextName>
            </InterviewText>
            <InterviewPicture>
              <Picture src="/placeholder.jpg" />
            </InterviewPicture>
          </InterviewBox>
        </Container>
        <Product>
          <ProductTitle>Our Product</ProductTitle>
          <ProductSubTitle>InSignum</ProductSubTitle>
          <ProductPicture>
            <ProductImage></ProductImage>
          </ProductPicture>
          <ProductDescription>
            <Description>Detect sounds as low as 40dB</Description>
            <Description>20 different vibration patterns</Description>
            <Description>
              <DescriptionIcon>
                <StyledBattery />
              </DescriptionIcon>
              6 day battery life
            </Description>
            <Description>
              Extra strong vibrations to never miss a sound
            </Description>
          </ProductDescription>
        </Product>
        <Footer />
      </Main>
    </>
  )
}
