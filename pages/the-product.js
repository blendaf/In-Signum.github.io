import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title, Subtitle } from '../components/Fragments'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`

const Heading4 = styled.h4`
  font-size: 25px;
  font-weight: 500;
`

const Image = styled.figure`
  text-align: center;
`

const Source = styled.img`
  width: 100%;
  border-radius: 1%;
  margin: 0 auto;
  display: block;
`

const Text = styled.p``

const Bullet = styled.ul``

export default () => {
  return (
    <>
      <Navbar dist={'160px'} />
      <Container>
        <Title>Generation One</Title>
        <Text>
          The purpose of our product is to help deaf people become aware of
          sounds in their surroundings. Not any little sound, but important
          ones, like a car horn, active fire alarms, someone yelling urgently,
          or just trying to get your attention. Things that hearing people take
          for granted and that can warn them of dangerous situations or
          important things happening around them.
        </Text>
        <Text>
          Just like any hearing person would, at the sound of danger the person
          will not be perceiving what exactly they are hearing before they can
          look around to see what is making the noise. In the same way, our
          product wants to help the deaf person by directing them towards the
          source of a sound that could be important to them. Once they can see,
          they will be able to act accordingly.
        </Text>
        <Text>
          By recording and analyzing sound characteristics, the relevance of the
          sound can be evaluated. Vibrations communicated directly through a
          wearable device will indicate where the sound is coming from, and its
          sound properties indicate how urgent it is. By making use of the
          interaural time differences (ITDs) and magnitude difference, this
          product can be realized simply by means of placing the device around
          the ears, just like common headphones would.
        </Text>

        <Subtitle>What is it?</Subtitle>
        <Text>
          The product will be a simple pair of wireless headphones, but instead
          of playing music, an array of microphones listens to sounds around
          you. The product analyzes the direction and character of all sounds.
          Once a sound is identified as important, sound mapped vibrations
          communicate to the user that something warrants their attention, and
          where to look for it.
        </Text>

        <Subtitle>Product Features</Subtitle>
        <Bullet>
          <li>Fits comfortably for long periods.</li>
          <li>
            Notifies the user of sounds around them by vibrating in such a way
            that they perceive where the vibration is coming from.
          </li>
          <li>Conveys directional source and urgency of sound.</li>
          <li>
            Wirelessly connects with your smartphone, watch, computer, or tablet
            and lets the user adapt the device to their needs. The user can
            specify how intense they like the vibrations, what kind of sounds
            they want to be made aware of, and more.
          </li>
          <li>
            Depending on what kind of sounds the user wants to be made aware of,
            battery life of up to a month.
          </li>
          <li>Charges via standard USB formats.</li>
        </Bullet>

        <Subtitle>Future Development</Subtitle>
        <Text>
          The initial product focuses on the direct surroundings of the user. It
          is essentially a companion device to the wearer, providing support
          directly through the tactile feedback. In upcoming products, we can
          offer more advanced upgrades to the functionality. Context sensitivity
          could allow the product to discern even more nuanced sounds by taking
          into account what kind of environment the user is in. We could also
          introduce natural language processing, allowing the device to
          recognize the users name or discern situations in different languages.
        </Text>
        <Text>
          The principle and technology of the device can be applied in a
          multitude of areas. Once the type of sound has been identified,
          several levels of information can be communicated to the user. Other
          than earbuds, there is also the possibility of using alternative forms
          of equipment. A belt or a simple vest that is worn directly underneath
          the user's clothes could allow even more precise directional
          information, as well as using alternative feedback methods such as
          heat or lights to complement the user interface.
        </Text>

        <Heading4>In-door Sensor Network</Heading4>
        <Text>
          With a more intricate system of sensors, a user can be made aware of a
          much larger multitude of situations. Perhaps the kitchen tap has been
          left, pouring water onto the floor. Or someone is moving around the
          house when nobody is supposed to be home. By calibrating the sensors
          and letting them learn what to listen for, anything that makes noise
          can be detected and the user can be notified. From the washing machine
          finishing it’s program to furniture falling over.
        </Text>

        <Text>
          By connecting the sensors to their smart devices, the users can learn
          what is going on in their home at any time. This also increases the
          potential user base from deaf people to anyone. While simple day to
          day things like the doorbell ringing are mostly useful for people who
          are hard of hearing. Deaf and hearing people can use this system to
          monitor their home and property.
        </Text>

        <Heading4>Office Environment Sensors</Heading4>
        <Text>
          The home monitor system can also be calibrated to fit the office
          environment by working as an assistance tool to staff members who have
          hearing disabilities. It could also track sound quality office-wide.
        </Text>

        <Heading4>In-car Assistant</Heading4>
        <Text>
          Lastly, it would also be possible to place the sensors in and around a
          car, notifying the user of sounds that may indicate the need for
          repairs or upcoming issues, such as worn down brakes. It can also make
          the driver aware of other cars approaching fast, emergency vehicle
          signals, or cars honking.
        </Text>
      </Container>
      <Footer />
    </>
  )
}
