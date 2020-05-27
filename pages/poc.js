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
        <Title>Prototype</Title>
        <Text>
          First priority is to verify that two vibration motors located close to
          the ears are enough to communicate direction of sound. As a first
          step, we will construct a prototype pair of headphones by attaching{' '}
          <strong>two microphones</strong> and{' '}
          <strong>two vibration motors</strong> to a pair of earmuffs and
          control them with an Arduino Uno.
        </Text>
        <Image>
          <Source src="/prototype_sketch.jpg" />
          <figcaption>Initial sketch of prototype</figcaption>
        </Image>
        <Text>This has the following benefits:</Text>
        <Bullet>
          <li>Easily wearable and simple to work with</li>
          <li>Partially testable by non-deaf subjects</li>
          <li>Single item that contains all parts</li>
        </Bullet>
        <Text>
          In short, the wearer will put on the earmuffs. This will help dampen
          the sound for hearing people so that the prototype can be tested even
          if the subject is not deaf. <br /> The mics will register all sounds
          depending on their orientation and location in relation to the source.
          The differently recorded magnitude will be translated into a
          proportional vibration in each motor.
        </Text>

        <Subtitle>Headphone Format</Subtitle>
        <Text>
          Each mic will register sound and output an analog signal. Built-in
          amplifiers will gain the signal and a peak detector circuit will store
          the magnitude for a short time so that it can be forwarded into the
          Arduino. The Arduino has built in AD conversion in the analog pins.
          Magnitude will be represented by integer value in the 0-1025 range.
        </Text>
        <Text>
          <strong>NOTE!</strong> The microphones need to be insulated from the
          vibrations so that there is no feedback loop.
        </Text>
        <Image>
          <Source src="/prototype_peak.png" />
          <figcaption>Peak Detection Circuit</figcaption>
        </Image>
        <Text>
          The motors tolerate a max voltage of 3.6 and use 81 mA. The Arduino
          digital pins output 5 volts and a 40 mA maximum, so the built-in 3.3V
          source pin will be used to power the motors. Motor speed will be
          adjusted with Pulse Width Modulation. By using a transistor, the
          motors will be controlled with the digital pins. The Arduino has
          built-in support for PWM in the digital pins.
        </Text>
        <Text>
          <strong>NOTE!</strong> The 3.3V pin has a 150 mA max so both motors
          will not be able to operate at maximum speed at the same time.
        </Text>
        <Image>
          <Source src="/prototype_control.png" />
          <figcaption>Motor Control Circuit</figcaption>
        </Image>
        <Text>
          Below is a diagram over how the wires are drawn to connect all
          different parts on the prototype
        </Text>
        <Image>
          <Source src="/prototype_connectionhub.jpg" />
          <figcaption>Connection Hub Diagram</figcaption>
        </Image>

        <Subtitle>Belt Format</Subtitle>
        <Text>
          The work has been distributed in two groups to maintain social
          distancing while increasing the work efficiency as much as possible,
          given the circumstances while focusing on developing prototypes. The
          hardware for lo-fi prototyping of the belt format include an Arduino
          Uno R3 to provide power supply. 4 microphones (MAX9814) to detect
          sound in 4 opposite directions. 8 haptic motor drivers (DRV2605L), and
          8 ERM vibration actuators (1020-15-003-001), to use predefined
          vibration effect. And a multiplexer (TCA9548A), to control all drivers
          simultaneously. We also borrowed tools for soldering and a multimeter
          from Middla lab at KTH.
        </Text>
        <Image>
          <Source src="/prototype_belt.png" />
          <figcaption>Photo of control unit for belt prototype</figcaption>
        </Image>

        <Subtitle>Results</Subtitle>
        <Text>
          Fine-tuning the calibration will require more analysis. As could've
          been expected, simply translating magnitude is not sufficient to
          indicate direction. It will allow the user to get a slight sense of
          left or right, but the difference in magnitude will need to be mapped
          on to a more high-resolution range to make the differences more
          distinct. It would be reasonable that 4 mics and motors will be
          required to indicate 360 degrees of direction.
          <br />
          The next natural step would be to further adjust the feedback from the
          motors to reach a level that is comfortable to the user. Then work on
          the software side to assess whether two mics are enough to at least
          effectively identify sounds to the right and left of the user.
        </Text>
        <Image>
          <Source src="/prototype_gen1.jpg" />
          <figcaption>Photo of the headphone prototype</figcaption>
        </Image>
      </Container>
      <Footer />
    </>
  )
}
