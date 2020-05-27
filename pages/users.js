import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title, Subtitle, Container } from '../components/Fragments'
import Link from 'next/link'

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
        <Subtitle>At a glance</Subtitle>
        <Text>
          Since the beginning, it became clear that the group has some
          significant connections with people with severe hearing loss or
          profoundly deaf, that is, our target group. For that reason, we
          already had some valuable insider knowledge about their needs and
          wants, and had easy access to knowing more about our users. However,
          we soon decided that it would be beneficial to have more input and
          opinions, and initially thought about creating a questionnaire and
          spread it around.{' '}
        </Text>
        <Text>
          After our first meeting with Henrik, he stated that he thought we
          already had enough input and maybe should focus on the people we
          already knew. We then decided to do that and prioritize interviewing
          our personal contacts, which we did via text message and video call
          for those who used sign language as a mother tongue. However,
          following this, the group agreed that we still needed more input, and
          we started to contact associations all over the world. We decided to
          go ahead with one of our first ideas, the survey, due to Coronavirus
          and the fact that the pandemic made it much harder to meet people. We
          figured that, since we had to gather data digitally anyways due to
          this odd situation, we were just as well off using the forms and thus
          created them in different languages and sent them to those
          associations that we had gotten in touch with, so they could be spread
          around easily.
        </Text>
        <Text>
          As we were sending out emails with our questionnaire, we got feedback
          from one of the associations that advised us to change the phrasing of
          the questions in the form to a simpler, clearer one. This is because
          the majority of deaf people, in Portugal, have poor writing and
          reading skills and could have trouble understanding the inquiries. As
          such, we re-wrote the Portuguese form, retaining the purpose of the
          questions, but changing their phrasing. We iterated this process until
          we achieved a version of the questionnaire that the associations
          agreed with. After receiving several responses to our questionnaire,
          we decided that we needed some extra information regarding the users’
          preferences and thus we emailed several of our potential customers
          that had responded to the form in an attempt to get more in-depth
          knowledge about what type of device can be the most useful for deaf
          people. This is explained in more details, further down.
        </Text>
        <Subtitle>Where we found our users</Subtitle>
        <Text>
          We reached potential customers out through our personal networks and
          deaf associations. We contacted all associations we could find in
          Sweden, China and Portugal, ranging from regional, smaller ones to
          national, bigger ones. A lot of them did not reply, which we already
          expected, especially considering we mostly sent out emails in March -
          the month, during which, most of the world shut down in several ways,
          due to Coronavirus. However, we still managed to actively get in touch
          with 3 associations and some more individual people. In total 25
          people responded to our questionnaire. This meant that we managed to
          get feedback from three different countries (including our personal
          contacts that were interviewed separately): Sweden, Portugal and
          Spain.
        </Text>
        <Subtitle>In-depth interviews</Subtitle>
        <Text>
          Our user research began with interviewing deaf people we already knew,
          via text message and video call for those who used sign language as a
          mother tongue. Together, we composed several questions and then
          translated them to portuguese, swedish and spanish, according to our
          acquaintances’ nationalities.
        </Text>
        <Text>
          The interviews consisted of inquiries regarding deaf people’s general
          needs and daily problems that they would like to be solved. We also
          asked about specific places and situations where people have felt
          particularly inconvenienced by their hearing impairments. We further
          requested a list of supporting devices that each person uses to be
          aware of surrounding sounds and its functionalities, as well as the
          user’s opinion on the tool’s efficiency and what their ideal device/s
          would look like.
        </Text>
        <Text>
          We also included a brief description and sketch of our idea, so the
          potential users could give their opinions about it, regarding the
          position of the wearable and type of feedback that they preferred, for
          instance. Furthermore, we considered important to know exactly what
          type of functionalities the users are looking for in such a product,
          as well as situations where they find it could be useful. We also
          asked for suggestions or general comments about the product.
        </Text>
        <Text>
          The answers we got from our acquaintances were a great help, since
          they gave us a clear idea of the overall needs of deaf people and
          allowed us to correct some of our initial assumptions Since these
          people are our friends and family, and felt at ease to give us
          pointers and detailed answers, we were able to properly communicate
          with each other and clarify our purpose and the meaning of certain
          inquiries, in order to avoid misunderstandings. We believe that these
          interviews were essential for our user research, as it gave us a
          better vision of what we needed to work on and helped us to construct
          the subsequent questionnaire, in order to obtain even more input.
        </Text>
        <Subtitle>Questionnaire</Subtitle>
        <Text>
          As previously mentioned, we targeted people with hearing impairments
          in associations and surveyed them using google forms. The
          questionnaire was similar to the previous interviews we conducted. We
          tried to redact them clearer, since we had to make sure that all
          questions conveyed its purpose accordingly without our intervention.
          We relied on the feedback that our previously interviewed
          acquaintances gave us. We also had in mind the fact that a google form
          is different from an interview, in the sense that a questionnaire is
          not a conversation and the respondents can not ask us easily what is
          the meaning of a certain inquiry.
        </Text>
        <Text>
          Although, the meaning of the questions was preserved to be the same as
          the ones described previously, in the interviews section, the
          questions asked in the questionnaire changed as we proceeded,
          especially considering that a significant amount of deaf people have
          low literacy levels regarding written communication. These changes
          were essentially made in the phrasing of the questions.
        </Text>
        <Text>
          The 25 answers we got from this form allowed us essentially to observe
          the users’ preferences and wishes regarding our product. After
          analysing the output, we could clearly pinpoint the preferred wearable
          placement, as well as the most liked form of feedback for the device.
          This was very valuable for us, as it permitted us to get to know our
          target group more and relate that knowledge to the development of our
          device.
        </Text>
        <Subtitle>Follow-up questions</Subtitle>
        <Text>
          After collecting the 25 answers for the questionnaire, we concluded
          that we needed additional information about the users’ priorities -
          whether they found more important for the product to be worn in a
          certain part of the body (wrist, as most of them preferred) or if they
          were willing to sacrifice that in exchange for accurate depiction of
          the direction of the sound, since we discovered that showing the
          direction of the sound in a wrist wearable is particularly complicated
          and inefficient. In the questionnaire we created there was a text box
          for the form respondents to write down their emails, in case they were
          interested to be further involved with the project, so we made use of
          those contacts and emailed them with our follow-up questions. Some of
          the respondents of the questionnaire were willing to be further
          involved with the project, therefore we contacted eight people asking
          our follow-up questions. Unfortunately we did not receive any
          responses to these emails.
        </Text>
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
          feedback, a small number of the subjects also said that they would
          prefer the combination of light and tactile feedback as a way of being
          notified for use cases inside the home. One subject mentioned
          preferring tapping or squeezing rather than vibration as tactile
          feedback. The majority of the subjects expressed that they wanted the
          product to notify them of the loudness of a sound as well as the
          direction of the sound. A majority also expressed that they wanted to
          be able to customize the notifications with regards to the intensity,
          pattern, or color of the feedback as well as what to be notified of
          and how often.
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
          the same conclusion arrived at from the in-depth interviews.
          Similarly, the answers also revealed that tactile feedback in the form
          of vibration was the most popular choice of the form of feedback. The
          second most popular preference was using lights for feedback. One
          respondent expressed that the type of feedback they wanted would
          depend on the areas of use of the product, and ideally, the product
          would be customizable with regards to feedback. Finally, when asked
          about further comments, it was expressed that it was important that
          any tactile feedback was strong, that the device was of high quality
          as to endure daily use and that the product needed to have a wide
          range of use cases.
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
