import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BatteryCharging } from '@styled-icons/boxicons-solid/BatteryCharging'
import { DoubleQuoteSerifRight } from 'styled-icons/open-iconic'

const Header = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgb(214, 220, 224);
`
const Main = styled.div`
  width: 100%;
`

const Section = styled.div`
  width: 100%;
`

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  padding-top: ${(props) => (props.bottom ? '80px' : '40px')};
  padding-bottom: ${(props) => (props.bottom ? '40px' : '0px')};
`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
`

const InterviewBox = styled.div`
  padding: 40px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  border-radius: 5px;
`

const StyledQuote = styled(DoubleQuoteSerifRight)`
  width: 250px;
  padding: 0 30px;
  color: #fd9e2e;
`

const InterviewText = styled.div``

const InterviewTextMain = styled.div`
  font-size: 20px;
  text-align: ${(props) => (props.left ? 'left' : 'right')};
  line-height: 1.5em;
`

const InterviewTextName = styled.div`
  padding-top: 20px;
  font-weight: 600;
  text-align: right;
  text-align: ${(props) => (props.left ? 'left' : 'right')};
`

const Product = styled.div`
  width: 100%;
  padding: 60px 0;

  color: #000;
`

const ProductPicture = styled.div`
  padding: 40px 0;
`

const ProductImage = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-color: rgb(39, 49, 56);
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
  color: rgb(39, 49, 56);
`

export default function Index() {
  return (
    <>
      <Header>
        <Navbar dist={'0px'} />
      </Header>
      <Main>
        <Product>
          <Title>Our Product</Title>
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

        <Section>
          <Container>
            <Title bottom>Why our product exists</Title>
            <InterviewBox>
              <StyledQuote />
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
            </InterviewBox>

            <InterviewBox left>
              <InterviewText>
                <InterviewTextMain left>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </InterviewTextMain>
                <InterviewTextName left>
                  Blenda Fröjdh, Stockholm
                </InterviewTextName>
              </InterviewText>
              <StyledQuote />
            </InterviewBox>

            <InterviewBox>
              <StyledQuote />
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
            </InterviewBox>
          </Container>
        </Section>

        <Footer />
      </Main>
    </>
  )
}
