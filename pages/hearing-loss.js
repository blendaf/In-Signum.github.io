import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: 500;
  margin: 0;
  padding-top: 20px;
  padding-bottom: ${(props) => (props.product ? '0px' : '40px')};
`
const Subtitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
`

const Text = styled.p`
  margin: 2em 0;
  line-height: 1.2;
`

const DiagramsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Diagrams = styled.img`
  padding: 20px 0;
  width: 100%;
`

export default function Index() {
  return (
    <>
      <Navbar dist={'320px'} />
      <Container>
        <Title>The Different Levels of Hearing Loss</Title>
        <Text>
          On this website, we use a variety of words to describe different
          levels of hearing disability. Since there may exist different
          definitions of these words the definitions we adhere to are stated
          below.
        </Text>
        <Subtitle>Disabling hearing loss</Subtitle>
        <Text>
          Disabling hearing loss refers to hearing loss greater than 40 decibels
          (dB) in the better hearing ear in adults and a hearing loss greater
          than 30 dB in the better hearing ear in children. This means that
          adults with disabling hearing loss can not hear sounds below 40dB
          (about the sound of a bird’s call [2])[1].
        </Text>
        <Subtitle>Severe/grave hearing loss </Subtitle>
        <Text>
          Severe or grave hearing loss is defined as not being able to hear
          sounds quieter than 50 to 64 decibels (about the sound of office noise
          [2]) in one’s better ear. People who suffer from a severe hearing loss
          are very hard of hearing and will normally have to use powerful
          hearing aids. Often they also rely on lip-reading even when they are
          using hearing aids [1].
        </Text>
        <Subtitle>Profound hearing loss/deafness</Subtitle>
        <Text>
          Deafness is often defined as having profound hearing loss to
          absolutely no hearing. Having profound hearing loss means that the
          quietest sounds heard, in the better ear, are at the lowest 80dB
          (about the sound of a garbage disposal [2]). People who suffer from
          profound hearing loss have a very weak sense of hearing and need very
          strong hearing aids or implants, many also rely on lip-reading and/or
          sign language [1].
        </Text>
        <Subtitle>References</Subtitle>
        <Text>
          [1] hear-it, "Definition of hearing loss," 5 April 2020. [Online].
          Available: https://www.hear-it.org/Defining-hearing-loss. <br /> [2]
          iac acoustics, "Comparative Examples of Noise Levels," 5 April 2020.
          [Online]. Available:
          https://www.iacacoustics.com/blog-full/comparative-examples-of-noise-levels.html.
        </Text>
      </Container>
      <Footer />
    </>
  )
}
