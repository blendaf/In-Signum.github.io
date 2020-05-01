import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Clarkson',Helvetica,sans-serif;
    color: rgb(39,49,56);
  }
`

const Main = styled.div`
  width: 100%;
  height: 800px;
`
const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: 500;
  padding-top: ${(props) => (props.product ? '40px' : '80px')};
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
      <GlobalStyle />
      <Navbar dist={'320px'} />
      <Container>
        <Title>User Research Strategy</Title>
        <Title>User Data</Title>
        <Subtitle>Summary of User Research Interviews</Subtitle>
        <Text>
          From the initial research interviews, we got some valuable initial
          feedback. Most of the information we got was about what kind of
          situations that people with hearing disabilities have trouble with and
          what daily obstacles they encounter, thus giving us a direction for
          our product. In all interviews, it was expressed that a major concern
          was not hearing sounds from different home tools that notify a user
          through sound. Some examples given were the fire alarm, the doorbell,
          the telephone, and so on. But it was also brought up that missing any
          kind of sound notifications, in general, was frustrating. It was also
          expressed that another concern was not hearing sounds of ones
          surrounding that may notify one of danger such as a burglar entering
          the house, a car driving closely, or other people warning of some
          danger. Lastly, it was also mentioned that a major problem was not
          being aware of other people talking or making sounds directed at
          oneself. Some examples given were of other people getting angry
          because they thought that the person with a hearing disability ignored
          them, when in fact they didn’t hear them or children having to throw
          stuff at their deaf parent/parents to get their attention etc.
        </Text>
        <Text>
          When asked about the assistive products they already used all the
          tools mentioned were video phones, a vibrating tool for the bed to
          warn about the fire alarm, children screaming, etc, alarm clocks using
          light instead of sound, light bulbs connected to the doorbell, using
          flash notifications on the phone (however this was found annoying
          because of the many notifications), one subject also used the
          vibration alarm function on their activity bracelet (however many
          notifications were missed). When asked about the preference for the
          form of the product all interview subjects expressed that a wristband
          or clock would be the preferred form. All subjects mentioned that they
          would prefer being notified by some kind of tactile feedback, a
          majority of the subjects also mentioned that they would prefer the
          combination of light and tactile feedback as a way of being notified.
          One subject mentioned preferring tapping or squeezing rather than
          vibration as tactile feedback. The majority of the subjects expressed
          that they wanted the product to notify them of the loudness of a sound
          as well as the direction of the sound. A majority also expressed that
          they wanted to be able to customize the notifications with regards to
          the intensity, pattern, or color of the feedback as well as what to be
          notified of and how often.
        </Text>
        <Subtitle>Summary of User Research Interviews</Subtitle>
        <Text>
          The questionnaire was written in three languages; Swedish, Portuguese,
          and English. In total 25 people responded to the questionnaire. The
          questionnaire was divided into two parts; the first part contained
          questions that pertained to their disability and their experience in
          general and the other part contained questions that were specific to
          our product. The questionnaire resulted in a few very clear
          demands/wishes about the product. For example, when asked about the
          most comfortable placement of our potential product, a clear majority
          expressed that an armband would be the preferred form for the product,
          the same conclusion arrived at from the interviews. Similarly, the
          answers also revealed that tactile feedback in the form of vibration
          was the most popular choice of the form of feedback. The second most
          popular preference was using lights for feedback. One respondent
          expressed that the type of feedback they wanted would depend on the
          areas of use of the product, and ideally the product would be
          customizable with regards to feedback. Finally, when asked about
          further comments it was expressed that it was important that any
          tactile feedback was strong, that the device was of high quality as to
          endure daily use and that it was important that the product had a wide
          range of use cases.
        </Text>
        <DiagramsWrapper>
          <Diagrams src="/feedback.svg" />
          <Diagrams src="/placement.svg" />
          <Diagrams src="/characteristics.svg" />
          <Diagrams src="/design.svg" />
        </DiagramsWrapper>
      </Container>
      <Footer />
    </>
  )
}
