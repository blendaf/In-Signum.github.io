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

const SubSubtitle = styled.h4`
  font-size: 20px;
  font-weight: 800;
  margin: 0;
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
`
const Figure = styled.img`
  width: 100%;
  padding-bottom: 40px;
`

const FigureText = styled.h3`
  font-weight: 500;
  font-style: italic;
  margin: 0;
`

export default function Index() {
  return (
    <>
      <Navbar dist={'480px'} />
      <Container>
        <Title>Our Business Model Canvas</Title>
        <FigureWrapper>
          <Figure src="/Canvas.png" />
        </FigureWrapper>
        <Subtitle>Key Partners</Subtitle>
        <Text>
          There are so many groups, associations, and companies working
          tirelessly to improve the life quality of people that are hard of
          hearing. We believe that collaboration is the key to success and
          progress, therefore, we will try to collaborate with some of the
          groups and associations that are leading change for people with
          hearing disabilities. For example, we hope to collaborate with the
          Swedish national deaf association in the form of getting feedback and
          improving our product. To be able to build our project we have to
          establish partnerships not only with other associations and companies
          working with or for people with hard of hearing, but also companies
          providing necessary hardware for our product.
        </Text>
        <Subtitle>Key Activities</Subtitle>
        <Text>
          Our key activities will foremost be the production of our product, the
          continuous development of our product through {'R&D'} activities and
          community management.
        </Text>
        <Subtitle>Key Resources</Subtitle>
        <Text>
          The key resources we have are close relationships with the persons in
          the deaf community meaning that we will be able to get continuous
          feedback from our key users and customers. Furthermore, we also have
          mentors and advisor that are knowledgable both within our
          technological area, but also within the area of innovation and
          business development.
        </Text>
        <Subtitle>Value Proposition</Subtitle>
        <Text>
          Comparing our product’s key features to that of the competitions we
          distinguish ourselves in a number of ways. The value we will be
          bringing to our customers is newness, we will be meeting needs that no
          other company or product can satisfy.
        </Text>
        <Subtitle>Customer Relationships</Subtitle>
        <Text>
          The relationship we want to establish with our customers is to create
          a community relationship. This could be done by offering a forum for
          people using our product or similar. Since our customer base is so
          slim we believe that 1. it would be quite easy or easier to create a
          sense of community 2. A good platform to be able to market our
          product. When trying to get in contact with our users we realized that
          the deaf community is quite small and tight-knit and that they use
          community forums such as Facebook groups and such heavily. So creating
          a community relationship with and between our customers we think would
          be an effective way to attract people to the forum and as such our
          product. Creating a forum could also be a way of offering customers to
          help with their devices as they could ask each other and us about the
          product.
        </Text>
        <Subtitle>Channels</Subtitle>
        <Text>
          To make sure our business will thrive and that as many people as
          possible will be able to enjoy our product we will sell our product
          both through our own website and through partner stores. Potential
          partner stores would be AudioNova (https://www.audionova.se/) and
          Audika (https://www.audika.se/), to name a few.
        </Text>
        <Subtitle>Customer Segments</Subtitle>
        <Text>
          We are targeting two customer segments: seniors who have developed
          severe hearing disabilities with old age as well as the deaf
          community. As both of these segments are relatively small we are
          targeting niche markets.
        </Text>
        <Subtitle>Cost Structure</Subtitle>
        <Text>
          Our main costs will be hardware and production. We will also have
          other costs such as marketing costs, costs of R&D of improvements and
          costs tied to selling our product.
        </Text>
        <Subtitle>Revenue Streams</Subtitle>
        <Text>
          The revenue streams we are counting on at the moment is revenue from
          asset sale, from selling the wearable. However, we believe that there
          is great potential for adding a subscription service to complement the
          wearable. The subscription service could potentially include offering
          further customization of the wearable, but as for now, the main
          revenue streams would be asset sales. Adding a subscription service
          could be included in a potential expansion or evolvement of the
          business later on.
        </Text>
      </Container>
      <Footer />
    </>
  )
}
