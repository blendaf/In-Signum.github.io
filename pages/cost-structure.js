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
      <Navbar />
      <Container>
        <Title>Our Business Cost structure</Title>
        <Subtitle>Assumed Income</Subtitle>
        <Text>
          To get an understanding or our possible income we look at the total
          number of potential customers in our market, the propensity to
          purchase our product amongst our potential users as well as the price
          of our product.
        </Text>
        <Subtitle>Total number of potential customers in our market</Subtitle>
        <Text>
          According to the World Health Organization, there are around 460
          million people who have problems with their hearing and it is
          projected that there will be more than 900 million people within the
          next decade [1]. We will divide our customer base into two different
          groups: profoundly deaf people and people with severe hearing loss. We
          have not found an exact number of how many people are deaf in the
          world or how many suffer from severe hearing loss, but have found that
          around 9% of people with hearing loss in the UK are entirely deaf [2]
          and approximately 3.4% in the United States have severe or profound
          hearing loss [3]. Based on the deaf rate from the UK and US, we can
          estimate that there are around 28.5 million profoundly deaf people and
          people with severe hearing loss in the world, which is our primary
          target group.
        </Text>
        <Subtitle>
          The propensity to purchase our product amongst potential customers
        </Subtitle>
        <Text>
          While our primary target group is quite large the number of actual
          customers is much lower. Estimating how many people will purchase our
          product is difficult since very little information about our
          competitors sales figures is available. However, about 35% of people
          in Europe with hearing loss use hearing aids [4]. This number could
          give an indication of our european customers' propensity to purchase
          our product.
        </Text>
        <Subtitle>The cost of our product</Subtitle>
        <Text>
          Looking at the retail price of our competitors,such as Ontenna, the
          conclusion was that the average price for similar products is around
          300€ to 400€. For example, Ontenna, which is a wearable clip with a
          mic, is sold for 230-270 euros [5]. So, if we put our product price
          between 200~350 euros, we believe that our price point would be
          attractive for our customers. Furthermore, government subsidies could
          help us make our product cheaper or even completely free to the final
          user, clearly affecting our customers willingness to pay. Our
          intentions are to keep our margins as high as possible while still
          offering a comparatively low cost solution. Many products directed at
          the deaf community have inflated prices due to being niche products.
          By undercutting this trend we could establish ourselves as a much more
          attractive actor in the eyes of our customers and as such acquiring a
          large market share.
        </Text>
        <Subtitle>Cost estimations</Subtitle>
        <Text>
          When calculating our cost estimates there are several factors we need
          to consider. First of all, we need to consider the fact that we are
          just starting our venture, therefore we have to consider starting
          costs. The major expenditures our business will have are first and
          foremost manufacturing of our product, marketing our product, setting
          up our sales channel as well as researching and developing our
          product.
        </Text>
        <Subtitle>Manufacturing and hardware costs</Subtitle>
        <Text>
          The first iteration of our prototypes had an approximate materials
          cost of 50 euros for the headphone format and 120 euros for the belt
          format. Future iterations will require additional components and be
          considerably more intricate. Our current best estimate is that about
          100 euros in materials is required to produce a demo product
          prototype. How this reflects on the manufacturing cost of our product
          is unclear at this point. Although, material costs will most likely be
          much lower per unit.
        </Text>
        <Text>
          The first early prototype of our product was made in the KTH mentor
          space in Kista, using machines that were available in the mentor
          space. For all future prototyping, we will be able to stay there and
          make use of the tools there, as well as the assistance of professor
          and mentor Mark Smith.
        </Text>
        <Text>
          Seeing as our business activities in the immediate future will be to
          create a demo prototype, the KTH mentor space would most likely be
          sufficient for our needs. However, in the future we will most likely
          be required to collaborate with a manufacturing partner and renting an
          office for our company base will also be needed.
        </Text>
        <Text>
          In the future, when we manufacture our product in a factory,
          additional costs will be added for things such as materials for the
          final product, cost of manufacturing, human resources costs, etc. The
          price for a single product, would be assumed to be about 100 euros
          each.
        </Text>
        <Subtitle>Marketing costs</Subtitle>
        <Text>
          Using Search Engine Optimization (SEO) would help us to prompt our
          websites to customers. To be able to effectively use SEO we would
          first acquire a good understanding of the search engine queries of our
          users.. Keyword research can tell us how customers are getting to our
          website, and help us refine our content strategy. SEO would help us
          attract more people to visit our website by searching for certain
          keywords. At the early stage of our venture, we would not have a
          significant budget for SEO. We estimate that we will, initially, be
          able to afford 3 keywords in Google, and the cost of each keyword is
          5€ per day, equaling 152€ per month [6].
        </Text>
        <Text>
          Regarding making marketing videos, we believe that we will be able to
          produce them ourselves. For social media marketing, we plan to use
          Facebook In the early stage of our venture. Facebook’s targeted ads
          offer a low cost solution to reaching our customers. For example,
          would we be able to target Facebook users interested in “deaf
          culture”, “sign language” and “hearing loss” for 1€ per day. We will
          then expand our marketing efforts by visiting several local deaf
          associations for an on-time selling campaign. If the strategy is
          successful we will continue to do it with more associations.
        </Text>
        <Subtitle>Sales costs</Subtitle>
        <Subtitle>Shop in shop strategy</Subtitle>
        <Text>
          Since we do not have a lot of funding in the beginning, we are going
          to go with a “shop in shop” sales strategy, which means that we will
          collaborate with offline stores, rent a space in their shop to sell
          our products [7]. We will look for the biggest stores which sell
          products for deaf and hard of hearing people, and collaborate with
          them using a shop in shop policy. We will share 20%~30% profits of the
          product sold with them for their sales service. If we are able to get
          the financial investment needed for our venture, we will expand the
          number of collaboration partners and at the same time reduce our
          trading profits policy from 20-30% to a number nearer 15%.
        </Text>
        <Subtitle>Online web store</Subtitle>
        <Text>
          We will start an online web store with a minimum setup, including a
          web host and a free domain, SSL certificate, a credit card processor.
          We will create the website ourselves. Setting up an online web store
          will cost about 6.5€ per month with 2~3% fee per transaction for store
          sales. If we are lacking manpower to run our business, we will
          outsource our webshop to Shopify, which costs 30€ per month.
        </Text>
        <Subtitle>References</Subtitle>
        <Text>
          [1] World Health Organization, “Deafness and hearing loss” 2020 Match
          1. [Online]. Available:
          https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss
          <br />
          [2] Hearing Link operates within Hearing Dogs for Deaf People. “Facts
          about deafness & hearing loss” last access: 2020 May 27. [Online].
          Available:
          https://www.hearinglink.org/your-hearing/about-hearing/facts-about-deafness-hearing-loss/
          <br />
          [3] B. Blanchfield , J. Feldman, J. Dunbar and E. Gardner, ". The
          Severely to Profoundly Hearing-Impaired Population in the United
          States : Prevalence Estimates and Demographics," Journal of the
          American Academy of Audiology , pp. 183-189, 2001.
          <br />
          [4] Hear-it.org, “In the EU, 22.6 million live with an untreated,
          disabling hearing loss”. last access: 2020 May 27. [Online].
          Available: https://www.hear-it.org/hearing-loss-in-europe
          <br />
          [5] Fujitsu Tokyo, “Fujitsu Launches Event Support Service Featuring
          Ontenna, a User Interface Device to Sense Sound with the Body”. 2019
          June 11. [Online]. Available:
          https://www.fujitsu.com/global/about/resources/news/press-releases/2019/0611-01.html
          <br />
          [6] Google, “Grow your business with Google Ads”. Last access: 2020
          May 27. [Online]. Available : https://ads.google.com/
          <br />
          [7] FLAME ANALYTICS, “What is shop in shop retail?”. 2019 November 20.
          [Online]. Available:
          https://flameanalytics.com/en/news/shop-shop-retail/
        </Text>
      </Container>
      <Footer />
    </>
  )
}
