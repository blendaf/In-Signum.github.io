import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title } from '../components/Fragments'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`

const Heading3 = styled.h3`
  font-size: 30px;
  font-weight: 500;

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

const Text = styled.p`
`

const Bullet = styled.ul`
`

export default () => {
  return (
    <>
      <Navbar dist={'160px'} />
      <Container>
        <Title>Generation One</Title>
        <Text>The purpose of our product is to help deaf people become aware of sounds in their surroundings. Not any little sound, but important ones, like a car horn, active fire alarms, someone yelling urgently, or just trying to get your attention. Things that hearing people take for granted and that can warn them of dangerous situations or important things happening around them.</Text>
        <Text>Just like any hearing person would, at the sound of danger the person will not be perceiving what exactly they are hearing before they can look around to see what is making the noise. In the same way, our product wants to help the deaf person by directing them towards the source of a sound that could be important to them. Once they can see, they will be able to act accordingly.</Text>
        <Text>By recording and analyzing sound characteristics, the relevance of the sound can be evaluated. Vibrations communicated directly through a wearable device will indicate where the sound is coming from, and its sound properties indicate how urgent it is. By making use of the interaural time differences (ITDs) and magnitude difference, this product can be realized simply by means of placing the device around the ears, just like common headphones would.</Text>

        <Heading3>What is it?</Heading3>
        <Text>The product will be a simple pair of wireless headphones, but instead of playing music, an array of microphones listens to sounds around you. The product analyzes the direction and character of all sounds. Once a sound is identified as important, sound mapped vibrations communicate to the user that something warrants their attention, and where to look for it.</Text>

        <Heading3>Product Features</Heading3>
        <Bullet>
          <li>Fits comfortably for long periods.</li>
          <li>Notifies the user of sounds around them by vibrating in such a way that they perceive where the vibration is coming from.</li>
          <li>Conveys directional source and urgency of sound.</li>
          <li>Wirelessly connects with your smartphone, watch, computer, or tablet and lets the user adapt the device to their needs. The user can specify how intense they like the vibrations, what kind of sounds they want to be made aware of, and more.</li>
          <li>Depending on what kind of sounds the user wants to be made aware of, battery life of up to a month.</li>
          <li>Charges via standard USB formats.</li>
        </Bullet>

        <Heading3>Future Development</Heading3>
        <Text>The initial product focuses on the direct surroundings of the user. It is essentially a companion device to the wearer, providing support directly through the tactile feedback. In upcoming products, we can offer more advanced upgrades to the functionality. Context sensitivity could allow the product to discern even more nuanced sounds by taking into account what kind of environment the user is in. We could also introduce natural language processing, allowing the device to recognize the users name or discern situations in different languages.</Text>
        <Text>The principle and technology of the device can be applied in a multitude of areas. Once the type of sound has been identified, several levels of information can be communicated to the user. Other than earbuds, there is also the possibility of using alternative forms of equipment. A belt or a simple vest that is worn directly underneath the user's clothes could allow even more precise directional information, as well as using alternative feedback methods such as heat or lights to complement the user interface.</Text>

        <Heading4>In-door Sensor Network</Heading4>
        <Text>With a more intricate system of sensors, a user can be made aware of a much larger multitude of situations. Perhaps the kitchen tap has been left, pouring water onto the floor. Or someone is moving around the house when nobody is supposed to be home. By calibrating the sensors and letting them learn what to listen for, anything that makes noise can be detected and the user can be notified. From the washing machine finishing it’s program to furniture falling over.</Text>

        <Text>By connecting the sensors to their smart devices, the users can learn what is going on in their home at any time. This also increases the potential user base from deaf people to anyone. While simple day to day things like the doorbell ringing are mostly useful for people who are hard of hearing. Deaf and hearing people can use this system to monitor their home and property.</Text>

        <Heading4>Office Environment Sensors</Heading4>
        <Text>The home monitor system can also be calibrated to fit the office environment by working as an assistance tool to staff members who have hearing disabilities. It could also track sound quality office-wide.</Text>

        <Heading4>In-car Assistant</Heading4>
        <Text>Lastly, it would also be possible to place the sensors in and around a car, notifying the user of sounds that may indicate the need for repairs or upcoming issues, such as worn down brakes. It can also make the driver aware of other cars approaching fast, emergency vehicle signals, or cars honking.</Text>
      </Container>
      <Container>
        <Title>Prototype</Title>
        <Text>First priority is to verify that two vibration motors located close to the ears are enough to communicate direction of sound. As a first step, we will construct a prototype pair of headphones by attaching <strong>two microphones</strong> and <strong>two vibration motors</strong> to a pair of earmuffs and control them with an Arduino Uno.</Text>
        <Image>
          <Source src="/prototype_sketch.jpg"/>
          <figcaption>Initial sketch of prototype</figcaption>
        </Image>
        <Text>This has the following benefits:</Text>
        <Bullet>
          <li>Easily wearable and simple to work with</li>
          <li>Partially testable by non-deaf subjects</li>
          <li>Single item that contains all parts</li>
        </Bullet>
        <Text>In short, the wearer will put on the earmuffs. This will help dampen the sound for hearing people so that the prototype can be tested even if the subject is not deaf. <br/> The mics will register all sounds depending on their orientation and location in relation to the source. The differently recorded magnitude will be translated into a proportional vibration in each motor.</Text>

        <Heading3>Headphone Format</Heading3>
        <Text>Each mic will register sound and output an analog signal. Built-in amplifiers will gain the signal and a peak detector circuit will store the magnitude for a short time so that it can be forwarded into the Arduino. The Arduino has built in AD conversion in the analog pins. Magnitude will be represented by integer value in the 0-1025 range.</Text>
        <Text><strong>NOTE!</strong> The microphones need to be insulated from the vibrations so that there is no feedback loop.</Text>
        <Image>
          <Source src="/prototype_peak.png"/>
          <figcaption>Peak Detection Circuit</figcaption>
        </Image>
        <Text>The motors tolerate a max voltage of 3.6 and use 81 mA. The Arduino digital pins output 5 volts and a 40 mA maximum, so the built-in 3.3V source pin will be used to power the motors. Motor speed will be adjusted with Pulse Width Modulation. By using a transistor, the motors will be controlled with the digital pins. The Arduino has built-in support for PWM in the digital pins.</Text>
        <Text><strong>NOTE!</strong> The 3.3V pin has a 150 mA max so both motors will not be able to operate at maximum speed at the same time.</Text>
        <Image>
          <Source src="/prototype_control.png"/>
          <figcaption>Motor Control Circuit</figcaption>
        </Image>
        <Text>Below is a diagram over how the wires are drawn to connect all different parts on the prototype</Text>
        <Image>
        <Source src="/prototype_connectionhub.jpg"/>
        <figcaption>Connection Hub Diagram</figcaption>
        </Image>


        <Heading3>Belt Format</Heading3>
        <Text>The work has been distributed in two groups to maintain social distancing while increasing the work efficiency as much as possible, given the circumstances while focusing on developing prototypes. The hardware for lo-fi prototyping of the belt format include an Arduino Uno R3 to provide power supply. 4 microphones (MAX9814) to detect sound in 4 opposite directions. 8 haptic motor drivers (DRV2605L), and 8 ERM vibration actuators (1020-15-003-001), to use predefined vibration effect. And a multiplexer (TCA9548A), to control all drivers simultaneously. We also borrowed tools for soldering and a multimeter from Middla lab at KTH.</Text>
        <Image>
        <Source src="/prototype_belt.png"/>
        <figcaption>Photo of control unit for belt prototype</figcaption>
        </Image>

        <Heading3>Results</Heading3>
        <Text>Fine-tuning the calibration will require more analysis. As could've been expected, simply translating magnitude is not sufficient to indicate direction. It will allow the user to get a slight sense of left or right, but the difference in magnitude will need to be mapped on to a more high-resolution range to make the differences more distinct. It would be reasonable that 4 mics and motors will be required to indicate 360 degrees of direction.<br/>The next natural step would be to further adjust the feedback from the motors to reach a level that is comfortable to the user. Then work on the software side to assess whether two mics are enough to at least effectively identify sounds to the right and left of the user.</Text>
        <Image>
        <Source src="/prototype_gen1.jpg"/>
        <figcaption>Photo of the headphone prototype</figcaption>
        </Image>
      </Container>
      <Footer />
    </>
  )
}
