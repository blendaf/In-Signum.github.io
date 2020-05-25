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
          How We Will Run The Venture
        </Title>
        <Subtitle> Our venture and its future, in short</Subtitle>
        <Text>
          The idea behind Insignum is primarily to produce devices that can
          detect and process sound and then notify the user of that sound in a
          certain way through visual and mainly tactile feedback, depending on
          the sound’s nature and characteristics. Meaning that while our initial
          product will be a wearable device, there is potential to expand our
          business to include other products such as products designed for home
          use, office use, and different niche products. The prototype we are
          developing is merely one amongst many others with various components
          that we could choose to build.
        </Text>
        <Text>
          We believe that there are many approaches we could take to help people
          with hearing impairments, so it is only natural that, if we would
          choose to continue with Insignum, we would end up developing other
          types of products or services in the area. We have, after all, gotten
          some mixed opinions with regards to the format in which the users want
          to get feedback of sounds and the sound characteristics that they feel
          are more relevant, for example. There are different ideal devices for
          different people and different situations, and as such, we need to
          take that into account. Of course, this is a long-term way of looking
          at the future. Although we want to express that we believe there is
          real potential in making Insignum into a large company with several
          different products and services if we continued this venture.
        </Text>
        <Subtitle>How much time will we have to spend on our venture?</Subtitle>
        <Text>
          Our business is very much still in its infancy, meaning that for our
          venture to get off the ground, we will have to invest a considerable
          amount of time on it. As our product is not just a mobile application
          or a service, but a hardware device, launching our product requires a
          considerable amount of time. Our product has to be developed, tested,
          improved over several iterations and finally get accepted to
          commercialization by governmental entities. We will also have to
          acquire investment and partner up with manufacturers to start
          producing our product on a larger scale. Furthermore, we will also
          need to set up a web sales channel or/and partner with retailers to
          sell our product. We will also need to market our product.
        </Text>
        <Text>
          However, if we focus on only producing a prototype that we can use to
          acquire financial investment (or at least when we would feel
          comfortable seeking financial investment), and after meeting with our
          mentor who also gave his precious opinion on the matter, we believe
          that we would have to spend roughly nine months working on our venture
          to have a finished demo of our product. During this time, we would
          also try to recruit people that have more experience in working with
          hardware and embedded electronics —we would estimate a team of 8
          people in total would be ideal. Even though we do have a substantial
          amount of relevant experience within the founding group, we feel that
          we lack the needed knowledge of hardware programming to be able to
          build a prototype that is close enough to the final product that it
          can be used as a demo prototype. Looking at it optimistically, we
          would also be able to have full-time jobs or conduct full-time studies
          during these nine months, which means that we would be able to spend
          about 10-16 hours a week per person.
        </Text>
        <Text>
          How much time we would need to spend on building our demo prototype
          would, of course, depend on any potential setbacks that we might
          experience building our prototype. However, we believe that how much
          access we have to our prospective users will also significantly affect
          how much time it will take until we have a finished demo prototype. We
          are highly dependent on being able to test our product continuously
          with our target users since the success of the product very much
          relies on its usefulness to our target users. The results of the user
          testing will also affect how much time we will need to build our demo
          prototype. If we discover that vast improvements are required after
          every iteration of user testing, then, of course, this will be very
          time-consuming. It can also be quite difficult to anticipate how many
          iterations of improvements and user testing are necessary. Even though
          we got constructive feedback from our users, it is still challenging
          to know how our users feel about the product until they are holding in
          their hands and can experience the use of the device first hand. If we
          are lucky, we will come up with a design, usability, and features for
          our product that will be successful amongst our users after only a few
          iterations. However, we do believe that it is likely that we have to
          go through several iterations.{' '}
        </Text>
        <Text>
          After having successfully developed a demo product and acquired the
          needed financial investment, we would most likely have to spend an
          additional year or two on our business to have the product on the
          market. We base this approximation on looking at other similar
          projects on Kickstarter. Of course, this is a very crude approximation
          since we know very little about the production time of our product. We
          do have a plan to release increasingly improved versions of our
          product, with more and more advanced functionalities. With this in
          mind, our demo product would be the first version and we estimate
          other versions would be released in the following three years - with a
          new product per year.
        </Text>

        <Subtitle> Business activities during the first year</Subtitle>
        <Text>
          There are several activities that we would do during our first year.
          The majority of them would be related to developing and testing our
          demo prototype. Since we believe that our demo prototype will take at
          least nine months to build, the first half-year would be mostly
          dedicated to develop, test, and improve our prototype iteratively.
          Hopefully, we would be able to combine this with our studies/full-time
          jobs as this does not require any financial investment before the demo
          product is finished. After having finished our demo product, our first
          step would be to apply for a patent for our device, register our
          business as well as introduce our potential product to the market.
          Most likely, we would create a Kickstarter campaign to receive the
          financial backing needed to start the production of the product.
          Creating a Kickstarter campaign (or similar) could also result in
          making our product known amongst our users before the launch of our
          product. Through the campaign, we could also gain some support for our
          product and hopefully get a better idea of the size of our market.
          Assuming we could acquire the needed financial investment on time (the
          average successful Kickstarter campaign is funded during a period
          shorter than 30 days [1] the next step would be to start looking for
          manufacturing partners that could produce our product. We would also
          begin investing in the marketing of our product to make the Insignum
          project known beyond the Kickstarter campaign and to create some buzz
          around the product. As mentioned in the marketing plan, we believe
          that we, through small means, can target our customers through social
          media using targeted ads.
        </Text>
        <Text>
          Further activities to be done after having developed our demo product
          would be to create marketing channels such as a website (or rather
          improve/develop our existing website) and update our existing social
          media channels. We would also start looking for retailers that can
          sell our product, and we would have to set up a webshop connected to
          our website. We feel that it would be essential to have our sales
          channels ready set up and ready before the launch of our product.
        </Text>
        <Subtitle>The outcome of the above activities</Subtitle>
        <Text>
          There are many people with hearing impairments all around the world,
          and to a significant part of them, the available devices on the market
          do not meet all their needs. Based on the interviews we conducted and
          the answers to our questionnaire, we believe that Insignum can fill
          some current gaps in the market, so we think that creating a
          Kickstarter campaign could prove a successful way of procuring
          financial investment for our business. In general, we trust that
          Insignum has real potential in helping people and succeeding in the
          market, and we believe that the success of the Kickstarter campaign
          will prove this. A successful Kickstarter campaign could also be used
          to demonstrate the potential of the business to acquire further
          financial investment if that would prove necessary. As mentioned
          above, we also believe that creating a Kickstarter campaign could help
          us get a better understanding of our market, gain support from
          potential users as well as market the product.
        </Text>
        <Text>
          {' '}
          We believe that we would be successful in finding retailers that would
          retail our product. The reason is that there already exist many
          retailers that sell hearing aids and other assistive products for
          people with hearing loss. If we would be able to reach agreements with
          retailers that could prove invaluable in launching InSignum, selling
          our product through a known retailer could increase the credibility of
          our product. Our user would also be able to test our product, and the
          product would be available in a place that many of our target users
          visit.
        </Text>
        <Subtitle>"What if…" scenarios</Subtitle>
        <Text>
          Starting a business entails a lot of risks and unknown future
          problems. One of the many dangers we face is, for example, that our
          Kickstarter campaign fails, and we, therefore, do not secure the
          needed investment for our business. The reason for our campaign
          failing could be a sign that our product is not wanted amongst our
          users, but it may also be because we have failed in properly reaching
          out to our customer segments or have marketed our product poorly. If
          we still believe in the success of our product at this stage, our
          response would be to seek financial investment from another source
          than through a Kickstarter campaign, for example, venture capitalists.
          We do not see that we would privately be able to or want to finance
          our business.{' '}
        </Text>
        <Text>
          Further risks are, of course, that our finished and launched product
          does not sell as much as we would expect. The first reaction would be
          to try to analyze the situation. We would have to figure out the
          reason for our product not selling. If the reason is that it is too
          unknown amongst our users, we would respond by investing a bit more in
          marketing our product. However, another reason could also be the price
          or usability of the product. Hopefully, we will have done enough
          research to prevent this from becoming a problem. However, people's
          behaviors and wants are difficult to predict, and user research does
          not always give an accurate portrayal of reality. However, we expect
          to minimize the price factor as we aim to dialogue with respective
          governments so they offer a subsidy to our customers that could make a
          difference in our customers willingness to pay. It would be
          complicated to fix the low sales if this situation occurred. We
          believe that the only solution would be to refinance our business, if
          even possible, to be able to redevelop our product or restructure our
          manufacturing process to be able to lower the price of our product.
        </Text>
        <Text>
          Further possible problems would be that we are not able to partner
          with retail stores. Our response to this would be to rely on our own
          direct sales channels entirely. There is also a risk that we would not
          be able to get our patent application approved. However, we believe
          the risk of this to be quite small since our product has quite unusual
          features and would differentiate itself from any existing patents.
          Although if our patent application were to be denied, we would face a
          significant obstacle. There is the possibility that the product could
          be redesigned as to differentiate it more to other patents, or we
          could possibly buy the rights to patent/s, that hinder our
          application, assuming that we had the finances for it.
        </Text>
        <Text>
          {' '}
          We can predict that the market will not change much from what it is
          now. There will always be people with hearing impairments that will
          need help - help we can provide with a product that is not similar to
          anything in the market right now. As such, if we try to apply the
          Australian Rabbit model as it is explained in the “Stop! Nobody move!”
          book, we can say that the industry will change mainly depending on our
          competitors’ new or improved products, rather than the client segment.
        </Text>
        <Text>
          {' '}
          To attempt to stay one step ahead of our competition and be relevant
          in the industry, we will have early mover advantages. We believe that
          our product is disruptive to the industry since we will use natural
          language and deep learning. There is, of course, a risk that
          competitors will copy our product features. We will also place our
          product at a lower price point in proportion to the functionality.
        </Text>
        <Subtitle>Covid-19 and our business </Subtitle>
        <Text>
          If people find Insignum useful, then that will not change due to
          COVID-19. Even if our users don't get out of the house as often, they
          still need to know whether someone is knocking at the door or if the
          fridge door is open, for example, and Insignum can provide them with
          this help. For this reason, if we provide excellent customer service
          and sell the devices online, we believe that many people would still
          be interested in our product. However, they would probably not be able
          to try the products before purchasing them, and this could be a
          downside for the company since this could result in potential
          customers' hesitation. A way to reduce the consequences of this would
          be to offer a 30-day return policy, in which the users can return the
          product with no additional fees if they don't like it.
        </Text>
        <Text>
          {' '}
          The COVID-19 virus will have significant economic consequences all
          over the world. As such, it is expected that people will be less
          likely to spend money, especially on things that are unfamiliar.
          However, Insignum can genuinely make a change in people's lives, and
          it is vital to pass on that message. As such, timing and smart
          marketing are essential to ensure that Insignum is reaching its target
          group in the right way.
        </Text>
        <Text>
          Our primary concern with regards to the economic downturn related to
          COVID-19 is instead that we will not be able to acquire the needed
          investment to start manufacturing, marketing, and selling our product.
          The recession caused by COVID-19 means that people (private financiers
          and venture capitalists) are less likely to invest in our business.
          The shut down of many countries will most likely result in long term
          effects that will negatively impact the economy for a couple of years.
          Of course, we can not do anything about the global economy, so we will
          have to adapt to the situation. Unfortunately, our business does
          require a substantial amount of initial investment because of the
          nature of our product, which means that we are dependent on outside
          investment. However, we do believe that our product will still be
          relevant in a few years and our product is not that affected by trends
          other than the change and development of technology. Therefore we
          believe that if we are not able to procure the needed investment, we
          can wait out the recession. Of course, it would be vital for us to
          make sure that our product is up to date with available or future
          technology (since what is technically feasible can change drastically
          during a short period of time) and that we update our patents
          accordingly.
        </Text>
        <Text>
          {' '}
          Another major problem that the COVID-19 virus has introduced is the
          fact that it is much more difficult for us to get in touch with our
          users because of the social distancing rules. We have already
          experienced this problem as we have tried to collect user data. Not
          only does the social distancing rules result in that a lot of deaf
          associations and the like being closed meaning that we have had a
          harder time getting in touch with our users, but also in that we can
          not physically meet our users (especially since a big part of our
          target users are seniors who are more susceptible to the virus) and
          they can not physically try on our prototype. We do believe that we
          can work around this problem somehow, maybe by delivering the
          prototype to their homes and performing the user testing remotely.
          However, it can be expected that COVID-19 will cause the testing
          process, and therefore the development process, to take a lot more
          time.
        </Text>
        <Subtitle>References</Subtitle>
        <Text>
          [1] Kickstarter, “What is the maximum project duration?, 9 May 2020.
          [Online]. Available:
          https://help.kickstarter.com/hc/en-us/articles/115005128434-What-is-the-maximum-project-duration-
          [2] Blomberg, H., Stop! Nobody Move, 2019, International Independent
          BusinessPress
        </Text>
      </Container>
      <Footer />
    </>
  )
}
