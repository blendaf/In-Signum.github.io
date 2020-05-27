import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title, Subtitle, Container } from '../components/Fragments'

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
      <Navbar dist={'640px'} />
      <Container>
        <Title main thin>
          Our Business Model Canvas
        </Title>
        <FigureWrapper>
          <Figure src="/canvas.png" />
          <FigureText>Our Business Model Canvas</FigureText>
        </FigureWrapper>
        <Subtitle>Key Partners </Subtitle>
        <Text>
          There are so many groups, associations, and companies working
          tirelessly to improve the life quality of people that are hard of
          hearing. We believe that collaboration is the key to success and
          progress, therefore, we collaborate with some of the groups and
          associations that are leading change for people with hearing
          disabilities. For example, we are working with the Stockholm chapter
          of the Swedish national deaf association to be able to continuously
          improve our product by getting feedback from their members. To be able
          to build our project, we have established partnerships not only with
          other associations and companies working with or for people that are
          hard of hearing, but also a manufacturing partner that produces our
          product and retail stores that sell our product. Another important
          partner would be the respective governments in different countries as
          the subsidies they might offer to the deaf and hard of hearing people
          could partially or totally cover the expense for our target users.
        </Text>

        <Subtitle>Key activities</Subtitle>
        <Text>
          Our principal activities are foremost the production of our product,
          the continuous development of our product through Reseach and
          development activities, marketing, and community management. We have a
          close relationship with our customers, this does not only help us to
          market our product, but to get valuable feedback on our device and
          what they want us to improve.
        </Text>

        <Subtitle>Key Resources</Subtitle>
        <Text>
          The key resources we have are close relationships with people within
          the deaf community, meaning that we are able to get continuous
          feedback from our key users and customers. Furthermore, we also have
          mentors and advisors that are knowledgeable both within our
          technological area, but also within the field of innovation and
          business development. We also have a diverse group of people working
          at the business with backgrounds in interaction design, autonomous
          systems, and ICT innovation.
        </Text>

        <Subtitle>Value proposition</Subtitle>
        <Text>
          Comparing our product’s key features to that of the competitions, we
          distinguish ourselves in a number of ways. Some of them being that our
          product is a discrete, wearable device that not only notifies its user
          of any sounds in the proximity but, through different tactile feedback
          patterns, notifies the user of a characteristic and direction of a
          sound source. The value we are providing to our customers is,
          therefore, newness, and we will be meeting needs that no other company
          or product today, can satisfy.
        </Text>

        <Subtitle>Customer Relationships</Subtitle>
        <Text>
          The relationship we have with our customers is a community
          relationship. This is done by offering a platform, through our social
          media channels, for people using our product to meet and discuss.
          Since our customer base is so slim, we believe that having a community
          platform is a great way to market our product. When trying to get in
          contact with our users we realized that the deaf community is quite
          small and tight-knit and that they use community forums such as
          Facebook groups and such heavily. So we think that creating a
          community relationship with and between our customers would be an
          effective way to attract people to the forum and as such to our
          product. Creating a forum could also be a way of offering our
          customers help with their devices as they could ask each other and us
          about the product. Therefore, one of our main activities is community
          management.
        </Text>

        <Subtitle>Channels</Subtitle>
        <Text>
          To make sure our business thrive and to ensure that as many people as
          possible will be able to enjoy our product, we sell our product both
          through our own website and through partner stores. There are a few
          retail stores that sell products specifically for people with hearing
          loss. Those are the stores that also sell our product. This is also an
          excellent way for us to find new customers since the people visiting
          these kinds of stores (either physically or digitally) are our key
          customer base.
        </Text>

        <Subtitle>Customer Segments</Subtitle>
        <Text>
          We are targeting two customer segments: people who have developed
          hearing loss later in life and as well as people who were born with
          profound hearing loss or no hearing at all (i.e who are deaf)or that
          developed this hearing loss during their childhood. What
          differentiates these two segments are mainly two things: age
          distribution and relationship to the deaf community. People who have
          developed their hearing loss later in life usually do not know sign
          language and do not have a significant connection to the deaf
          community. The majority of this segment is over 65 years old. People
          who developed profound hearing loss or deafness at the early stages of
          their life, however, commonly do have strong ties to the deaf
          community and often use sign language as their primary way of
          communication. The age within this segment is also evenly distributed.
          As both of these segments are relatively small we are targeting niche
          markets.
        </Text>

        <Subtitle>Cost Structure</Subtitle>
        <Text>
          Our main costs are production and marketing. Of course, we also have
          other costs such as costs of research and development of improvements,
          costs tied to community management, and costs linked to selling our
          product.
        </Text>

        <Subtitle>Revenue Streams</Subtitle>
        <Text>
          Our revenue streams are revenue from assets sales, from selling the
          device itself. However, we believe that there is great potential for
          adding a subscription service to complement the wearable. The
          subscription service could potentially include offering further
          customization of the wearable, but as for now, the main revenue
          streams would be asset sales. Adding a subscription service could be
          included in a potential expansion or evolvement of the business later
          on.
        </Text>
      </Container>
      <Footer />
    </>
  )
}
