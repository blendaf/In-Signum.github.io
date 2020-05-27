import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title, Subtitle } from '../components/Fragments'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
`
const Text = styled.p`
  margin: 2em 0;
  line-height: 1.2;
`

const FigureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 40px;
`
const Figure = styled.img`
  width: 100%;
`

const FigureText = styled.h3`
  font-weight: 500;
  font-style: italic;
  margin: 0;
`
export default () => {
  return (
    <>
      <Navbar dist={'480px'} />
      <Container>
        <Title>Competitors</Title>

        <Text>
          In the current market, there are 7 major products in 3 areas in
          assisting people’s hearing impairments.
        </Text>
        <Subtitle>Wearable devices</Subtitle>

        <FigureWrapper>
          <Figure src="/competitors1.png" />
          <FigureText>Placeholder for Table of Competitors</FigureText>
        </FigureWrapper>
        <Text>
          Ontenna is a new interface device that is worn atop the user’s hair.
          It conveys the characteristics of sounds using vibration and light
          through their hair, which is similar as we also plan to do. However,
          we believe its location, on the top of your head, is not optimal,
          especially for discretion, which is a must for our users.
        </Text>
        <Text>
          Music: Not impossible is a wearable technology that translates sound
          into the skin through vibration, but it is only focused on users
          feeling music, and the company’s goal is totally different from ours,
          being very case-specific. It is, though, a fully immersive experience,
          which is definitely an interesting plus.
        </Text>
        <Text>
          Bellman & Symfone has created a personal amplifier to help people hear
          better. The greatest distinction with our idea is that Bellman &
          Symfone are focusing on hearing loss, and people who can not hear at
          all will not benefit from this product.
        </Text>
        <Subtitle>Home systems</Subtitle>
        <FigureWrapper>
          <Figure src="/competitors2.png" />
          <FigureText>Placeholder for Table of Competitors</FigureText>
        </FigureWrapper>
        <Text>
          Wiim is a smartwatch linked to sensors that you have installed in your
          home. You can know if the doorbell is ringing or your child is crying.
          It also has SOS buttons, in case of an emergency, which we believe is
          a plus. However, it is not possible to buy the product, since their
          campaign in indiegogo was unsuccessful.
        </Text>
        <Text>
          Visualfy is also a home-system and not only notifies the users but
          also enables them to recognize the sound. This, we believe, is one of
          our greatest competitors, since sound recognition is an area we want
          to go deeper into, as well. However, they use lights to notify the
          user and we believe that can be a disadvantage since the user can be
          sleeping or simply looking somewhere else.
        </Text>
        <Text>
          Comfort Audio provides a product Comfort Duett, which is an
          easy-to-use hearing amplifier that helps you get more involved in
          almost any situation, and with its compact design, it discreetly tags
          along anywhere you go.
        </Text>
        <Text>
          A Cochlear implant can be implanted through a medical procedure. It
          can provide a sense of sound for a person who is profoundly hard of
          hearing. Its use is controversial within the deaf community as many
          see it as a menace to the deaf culture.
        </Text>
        <Subtitle>How We Differentiate Ourselves</Subtitle>
        <Text>
          We differentiate ourselves on 6 accounts from our competitors;
          Mobility: many other products are home systems or non-mobile.
          Discretion: our product will have a discrete design, in contrast to,
          for example, Ontenna, which has a very non-discrete design.
          Customization: our product will be customizable in that the user can
          customize the pitch and loudness of the sounds they will be notified
          of and the pattern and intensity of the tactile feedback. Different
          form factors: our goal is to offer our product in different form
          factors such as a belt, wristband, etc. The use of natural language
          and a smart system: our goal is that our product will incorporate the
          use of natural language and learn the surroundings environments by
          using AI technologies. We have relatively affordable prices: while
          most of our competitors are variable pricey, our product is priced
          reasonably cheaper.
        </Text>
      </Container>
      <Footer />
    </>
  )
}
