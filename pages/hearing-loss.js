import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title, Subtitle } from '../components/Fragments'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`

const Text = styled.p`
  margin: 2em 0;
  line-height: 1.2;
`

export default () => {
  return (
    <>
      <Navbar dist={'480px'} />
      <Container>
        <Title>Different Levels of Hearing Loss</Title>
        <Text>
          On this website, we use a variety of terms to describe different
          levels of hearing disability since there may exist different
          definitions of these terms we have defined them based on how we use
          them below.
        </Text>

        <Text>
          <b>Disabling hearing loss</b> refers to hearing loss greater than 40
          decibels (dB) in the better hearing ear in adults and a hearing loss
          greater than 30 dB in the better hearing ear in children. Meaning that
          adults with disabling hearing loss can not hear sounds below 40dB
          (about the sound of a bird’s call [2])[1].
        </Text>

        <Text>
          <b>Severe or grave hearing loss</b> is defined as not being able to
          hear sounds quieter than 50 to 64 decibels (about the sound of office
          noise [2]) in one’s better ear. People who suffer from severe hearing
          loss are very hard of hearing and will generally have to use powerful
          hearing aids. Often they also rely on lip-reading even when they are
          using hearing aids [1].
        </Text>

        <Text>
          <b>Deafness/profound hearing loss</b> implies a total lack of hearing.
          Having profound hearing loss means that the quietest sounds heard, in
          the better ear, are at the lowest 80dB (about the sound of a garbage
          disposal [2]). People who suffer from profound hearing loss have a
          very weak sense of hearing and need powerful hearing aids or implants;
          many also rely on lip-reading and/or sign language [1].
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
