import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title, Subtitle } from '../components/Fragments'
import Link from 'next/link'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`
const Text = styled.p`
  margin: 2em 0;
  line-height: 1.2;

  > a {
    transition: all 0.2s ease;
    color: rgb(39, 49, 56);

    :hover {
      color: #fd9e2e;
    }
  }
`

const FigureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Diagram = styled.img`
  padding: 20px 0;
  width: 100%;
`

const Table = styled.img`
  padding: 20px 0;
  width: 100%;
  padding-bottom: 60px;
`
export default () => {
  return (
    <>
      <Navbar dist={'480px'} />
      <Container>
        <Title>User Research Process</Title>
        <Title>User Data</Title>
        <Subtitle>Summary of User Research Interviews</Subtitle>
        <Text>
          From the initial research interviews, we got some valuable initial
          feedback. Most of the information we got was about what kind of
          situations that people with hearing disabilities have trouble with and
          what daily obstacles they encounter, thus giving us a direction for
          our product. In all interviews, it was expressed that a primary
          concern was not being able to hear sounds from different home tools
          that notify a user through sound. Some examples given were the fire
          alarm, the doorbell, and the telephone. But it was also brought up
          that missing any sound notifications, in general, was frustrating. It
          was also expressed that another concern was not hearing sounds of
          one’s surroundings that may notify one of danger such as a burglar
          entering the house, a car driving too close, or other people warning
          of some danger. Lastly, it was also mentioned that a major problem was
          not being aware of other people talking or making sounds directed at
          oneself. Some examples given were of other people getting angry
          because they thought that the person with a hearing disability ignored
          them, when in fact, they didn’t hear them, or children having to throw
          stuff at their deaf parent or parents to get their attention.
        </Text>
        <Text>
          When asked about the assistive products they already used, all the
          tools mentioned were video phones, a vibrating device for the bed to
          warn about such sounds as the fire alarm and children screaming, alarm
          clocks using light instead of sound, light bulbs connected to the
          doorbell, using flash notifications on the phone (however this was
          found annoying because of the many notifications) and one subject also
          used the vibration alarm function on their activity bracelet (however
          many notifications were missed). When asked about the preference for
          the form of the product, all interview subjects expressed that a
          wristband or clock would be the preferred form. All subjects mentioned
          that they would prefer being notified by some kind of tactile
          feedback, a majority of the subjects also said that they would prefer
          the combination of light and tactile feedback as a way of being
          notified. One subject mentioned preferring tapping or squeezing rather
          than vibration as tactile feedback. The majority of the subjects
          expressed that they wanted the product to notify them of the loudness
          of a sound as well as the direction of the sound. A majority also
          expressed that they wanted to be able to customize the notifications
          with regards to the intensity, pattern, or color of the feedback as
          well as what to be notified of and how often.
        </Text>
        <Subtitle>Summary of User Research Interviews</Subtitle>
        <Text>
          The questionnaire was written in three languages; Swedish, Portuguese,
          and English. In total, 25 people responded to the questionnaire. The
          questionnaire was divided into two parts; the first part contained
          questions that pertained to their disability and their experience in
          general, and the other section included questions that were specific
          to our product. The questionnaire resulted in a few apparent
          demands/wishes about the product. For example, when asked about the
          most comfortable placement of our potential product, a clear majority
          expressed that an armband would be the preferred form for the product,
          the same conclusion arrived at from the interviews. Similarly, the
          answers also revealed that tactile feedback in the form of vibration
          was the most popular choice of the form of feedback. The second most
          popular preference was using lights for feedback. One respondent
          expressed that the type of feedback they wanted would depend on the
          areas of use of the product, and ideally, the product would be
          customizable with regards to feedback. Finally, when asked about
          further comments, it was expressed that it was important that any
          tactile feedback was strong, that the device was of high quality as to
          endure daily use and that the product needed to have a wide range of
          use cases.
        </Text>
        <FigureWrapper>
          <Diagram src="/feedback.svg" />
          <Diagram src="/placement.svg" />
          <Diagram src="/characteristics.svg" />
          <Diagram src="/design.svg" />
        </FigureWrapper>

        <Subtitle>From User Data to Product</Subtitle>
        <Text>
          From these interviews and questionnaires, we have been able to create
          a prioritized table with “I want…” statements. These statements are
          supposed to identify what functions and characteristics our potential
          users want in our product. The statements were also prioritized
          depending on how many of our interview/questionnaire subjects
          expressed the same sentiment as well as if they put extra weight
          behind any statement such as “the most important function would be…’.
          We could then use the table to create a more detailed product
          specification. Since we did not receive any responses to our follow up
          questions, we had to make assumptions about what was most important:
          knowing the direction of a sound or having the device placed on the
          wrist when creating our product specification. For more information,
          see our page{' '}
          <Link href="/the-product">
            <a>about our product</a>
          </Link>
          .
        </Text>
        <FigureWrapper>
          <Table src="/Iwant.png" />
        </FigureWrapper>
      </Container>
      <Footer />
    </>
  )
}
