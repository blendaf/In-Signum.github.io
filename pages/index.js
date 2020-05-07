import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title } from '../components/Fragments'
import { BatteryCharging } from '@styled-icons/boxicons-solid/BatteryCharging'
import { FormatQuote } from '@styled-icons/material-sharp/FormatQuote'

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

const StyledQuote = styled(FormatQuote)`
  height: 100px;
  box-sizing: border-box;
  color: #fd9e2e;
`

const InterviewText = styled.div`
  width: 80%;
  padding-top: 20px;
`

const InterviewTextMain = styled.div`
  font-size: 25px;
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
export default () => {
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
                  An emergency alarm went of at my workplace, a chemical
                  research lab. I couldn't hear the alarm. luckily I was warned
                  by a collugue, but what if I would have been in the bathroom?
                  What if there hadn't been anyone there to warn me?
                </InterviewTextMain>
                <InterviewTextName>Carolina, Porto</InterviewTextName>
              </InterviewText>
            </InterviewBox>

            <InterviewBox left>
              <InterviewText>
                <InterviewTextMain left>
                  I was almost run over by an ambulance. It was coming from
                  behind a truck and people didn't warn me because they expected
                  me to hear it and stop.
                </InterviewTextMain>
                <InterviewTextName left>Alex, Madrid</InterviewTextName>
              </InterviewText>
              <StyledQuote />
            </InterviewBox>

            <InterviewBox>
              <StyledQuote />
              <InterviewText>
                <InterviewTextMain>
                  People tend to get angry because they think you are ignoring
                  them, not knowing you are deaf. Once a floor cleaning machine
                  driver was yelling and complaining because I didn't move out
                  off the way, but of course it was just that I couldn't hear
                  him.
                </InterviewTextMain>
                <InterviewTextName>André, Stockholm</InterviewTextName>
              </InterviewText>
            </InterviewBox>
          </Container>
        </Section>

        <Footer />
      </Main>
    </>
  )
}
