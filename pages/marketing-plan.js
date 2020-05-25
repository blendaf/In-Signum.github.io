import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Title, Subtitle } from '../components/Fragments'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
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
        <Title>Marketing Plan</Title>
        <Subtitle>How Many Potential Users Are There</Subtitle>
        <SubSubtitle>Sweden</SubSubtitle>
        <Text>
          In Sweden, about 1 487 000 people above the age of 16 have hearing
          loss, making up 18.5% of the population (SCB). In this case, a person
          with a hearing loss is defined as a person that has answered no to the
          question “Can you easily hear what is said in conversation between
          several people, with or without a hearing aid?" [1]. Our target users
          are first and foremost people with no hearing or grave hearing loss
          since our product will help to notify users of loud sounds as well.
          Our product is therefore developed for people who suffer from severe
          or profound hearing loss or who are completely deaf. Of course, this
          does not limit the use of our product to those users. However, those
          are the potential users we count on when calculating our cost
          structure. The number of potential users can, therefore, be expected
          to be less than the number above. It is unclear exactly how many
          people are deaf (i.e., people with no hearing at all or who have
          profound hearing loss) in Sweden, but according to Döva.se there are
          around 8000-10000 people in Sweden who were born deaf or became deaf
          during their childhood [2]. Of course, this does not include the
          people who have become deaf later in life (this is, however, a
          relatively small number). It is also not clear how many people have
          severe hearing loss. Although it is estimated that, in the United
          States, the number of people with severe or profound hearing loss was
          approximately 3.4 percent of the total hearing-impaired population
          [3]. Assuming the proportions are the same in Sweden, approximately 50
          000 people in Sweden suffer from either severe or profound hearing
          loss.
        </Text>
        <FigureWrapper>
          <Figure src="/hearingLossDistr.png" />
          <FigureText>
            Distribution of hearing loss amongst the population of Sweden.
          </FigureText>
        </FigureWrapper>
        <Text>
          We use Sweden as an example since we expect the Swedish market to be
          the market where we will initially launch our product. However, we see
          great potential in selling our product internationally as soon as
          possible, and Sweden could be a great testing market. Sweden could be
          a great starting market because of the high penetration of technology
          in everyday life [4], the fact that Sweden has a relatively old
          population coming in at 12th place in the world [5], the fact that the
          founding group has good network connections in Sweden as well as
          Sweden having good prerequisites for a tech start-up (ranking third in
          UNIDO’s Global Cleantech Innovation Index [6]).
        </Text>
        <SubSubtitle>Internationally</SubSubtitle>
        <Text>
          According to WHO, about 466 million people worldwide have disabling
          hearing loss (5% of the population), and this number is expected to
          increase to over 900 million by 2050 [7]. It is not clear how many
          people have profound hearing loss or severe hearing loss in the world,
          but, as stated above, according to Blanchfield et al. the number of
          people with severe and profound hearing loss was approximately 3.4
          percent of the total hearing-impaired population in the United States
          [3]. This means that about 16 million people in the world suffer from
          severe or profound hearing loss, assuming that the percentage of
          people with profound and severe hearing loss is the same across the
          globe. However, as hearing loss is more prevalent in low- and
          middle-income countries, this is just a crude approximation [7].
        </Text>
        <Subtitle>User segments</Subtitle>
        <Text>
          The number of deaf people in Sweden is quite evenly distributed
          between different age segmentations; this is explained by the fact
          that the majority of deaf people are born deaf or become deaf during
          their childhood. Only a minimal number become deaf later in life.
          However, when looking at people with hearing loss, in general, a clear
          majority is older. In fact, in Sweden, a majority (52% about 775 000
          people) of people with hearing loss are above the age of 65;
          therefore, the majority of our potential users are older. As mentioned
          previously, not all of the 52% are the target users for our product,
          although we can expect to find a substantial amount of our users
          within the 52 %. Even though a majority of people with hearing loss
          are above the age of 65, there is still a significant number of people
          with hearing loss that are under the age of 65. In fact, already at
          the age of 45-64 one in five experience trouble with their hearing
          [1]. We assume that the distribution is similar internationally since
          there is little data on the age distribution globally. Below is the
          age distribution of people over 16, with hearing loss in Sweden, 2017
          [1]. There is also a slight difference between men and women, men
          making up 56% of people with hearing loss. However, we see no reason
          to segment our users based on gender as the needs of users of
          different genders, with regards to our product, do not differ [1].
        </Text>
        <FigureWrapper>
          <Figure src="/ageDistr.png" />
          <FigureText>
            The age distribution of people, over 16, with hearing loss in
            Sweden, 2017. Data taken from Hörselskadades Riksförbund [1].
          </FigureText>
        </FigureWrapper>

        <Text>
          Based on the above data, we will divide our customer base and focus on
          two customer segments. The first segment will include people who are
          entirely deaf or have profound hearing loss. The majority of these
          were born deaf or became deaf during their childhood years. They know
          sign language and are overall engaged or have some kind of connection
          to the deaf community. This segment includes people of all ages and
          nationalities. Therefore they are not connected because of demographic
          identifiers but make up the same customer segment because of their
          disability. Even though these users, of course, differ from each other
          in several ways, they will have similar experiences/skills such as
          communicating through sign language, attending specific schools, and
          the overall experience of living in a society not adapted to people
          who are deaf. We believe that this segmentation is justified since
          these users will require a different kind of relationship, and the
          marketing channels and how we communicate with these users will
          differ. The second customer segment includes people with grave or
          profound hearing loss that they have developed later in life. This
          means that these are people who are not necessarily a part of a deaf
          community, do not know sign language, and overall have different
          experiences from people who are deaf. However, they do experience
          similar hardships and have similar needs from the product as people
          who are deaf. This segment is mostly made out of seniors and people
          who are above the age of 65. Although it is important to mention, a
          number of these users are also younger than 65. In conclusion, the
          significant differences between the two segmentations are, first and
          foremost, their relationship to the deaf community. Although these two
          segments will have similar distribution channels, we believe that the
          relationship with the users and how we communicate with them will be
          vastly different.
        </Text>
        <Subtitle>Who are our buyers and where do we find them?</Subtitle>
        <Text>
          When considering how to market our product, we have to identify not
          only who our users are but who our buyers are. These two are not
          necessarily the same. Especially when looking at our older users,
          there is the possibility that younger family members might purchase
          our product to their older family members with hearing disabilities.
          Although there is no data backing up the specific claim that younger
          family members buy technology to their older family members, we do
          know that technology adoption is a lot larger amongst younger
          generations [8]. Therefore we will not only market to our older users
          but their family members as well. The same goes for the parents of
          children who are deaf. Most likely, deaf children will not be the
          buyers of our product, but their parents will be. Deaf
          children/teenagers also won’t be the aim of our marketing, unlike with
          toys and similar products aimed for children/teenagers. Within the
          deaf community, social media has become an essential communication
          tool. In fact, according to the BBC, the deaf clubs that exist within
          the deaf community have mostly migrated to Facebook and other social
          media channels. Social media and Facebook, in particular, allow
          communicating and creating content in video format, which is well
          suited for sign language and, therefore, deaf communities [9].
        </Text>
        <Subtitle>Customers willingness to pay</Subtitle>
        <Text>
          Since there are not any identical products to ours, it is difficult to
          refer to the popularity of our competitors as definitive proof that
          our customers are willing to pay for our product. However, looking at
          similar products may provide some guidance. The cost of hearing aids
          differs widely depending on the quality and how advanced the hearing
          aid is. The price for an individual may also vary depending on what
          subsidies are offered in respective countries. In Sweden, for example,
          hearing aids are subsidized if one fulfills the requirements and is
          satisfied with a hearing aid provided by the health care system. Then,
          in most cases, the cost of a hearing aid is a little as 1000 SEK,
          which is about 100 euros [10]. Of course, this is not the total cost
          for the hearing aids, only what the individual would pay. In the US,
          hearing aids can cost somewhere between 500 euros and 6000 euros [11].
          In the US, 3.65 million hearing aids were dispensed in 2016 alone. In
          Spain the average cost for hearing aids range between 1000 and 3000
          euros per ear. Depending on the autonomous community, families with
          less than 17000 euros yearly income could deduct part or the full cost
          of the price [14]. This subsidy could make a difference in our
          customers willingness to pay. In one interview, the participant
          admitted to being willing to pay up to 1000 euros for a device that
          provides him with sound location awareness. Looking at other similar
          products, for example, the products by Bellman and Symfon cost around
          100 euros [12]. Lastly, looking at the user input we have got so far,
          we know that a majority of people that have responded to our survey
          currently use some of the products above. From this, we can conclude
          that there definitely is a willingness to pay for hearing assistive
          products, despite the high costs tied to them, and we believe there is
          a willingness to pay for our product, assuming that we can keep the
          retail price to a similar level or lower than that of related
          products.
        </Text>
        <Subtitle>How will we communicate with our users/buyers?</Subtitle>
        <Text>
          We will rely heavily on social media to communicate with our users.
          Our reason is that the deaf community already relies heavily on social
          media as a way of communication and creating a sense of community [9].
          As we are not only focusing on people who are deaf but also people who
          have severe hearing loss, our target users also include seniors who
          have developed hearing loss with old age. To target our older users,
          we cannot rely only on social media because of the relatively low
          penetration of those marketing channels amongst seniors [13].
          Therefore we may also need to focus on more traditional marketing
          channels such as TV and newspaper marketing. However, it is important
          to mention that a growing number of seniors are using social media.
          Therefore a good strategy could be to focus on social media platforms
          more popular amongst seniors such as Facebook [8]. It is also
          important to consider that children or other more tech-savvy family
          members might purchase the product for their older family members with
          disabling hearing loss. The buyers of the product are, therefore, not
          necessarily the users. We, therefore, believe that the need for
          marketing through traditional channels will be small. Furthermore, we
          see the potential of partnering with hearing clinics and similar
          medical establishments through which we can offer our product and thus
          effectively reaching our potential customers. Since we are still
          starting up, we will initially focus only on social media as a
          marketing channel because of the low costs. Not only can we use our
          own social media accounts for marketing, but we can also market more
          effectively since we can target our users through directed ads. This
          could be extra effective for our business since we are targeting a
          niche market. However, we see the potential down the line to invest in
          marketing in more traditional channels to reach older customers.
          Although, as mentioned previously, we do understand that the need to
          rely on conventional channels might be quite small. Furthermore, as
          mentioned in our business model canvas, our goal is to develop
          partnerships with, amongst others, hearing clinics and retirement
          homes,which may help us reach our older customer segment without
          relying on traditional marketing channels.
        </Text>
        <Subtitle>References</Subtitle>
        <Text>
          [1] Hörselskadades Riksförbund, "Hörselskadade i siffror 2017,"
          Hörselskadades Riksförbund, 2017. <br /> [2] E. Karlson, "Om dövhet i
          Sverige," 20 February 2013. [Online]. Available:
          https://xn--dva-sna.se/om-dovhet-i-sverige/. <br /> [3] B. Blanchfield
          , J. Feldman, J. Dunbar and E. Gardner, " The Severely to Profoundly
          Hearing-Impaired Population in the United States : Prevalence
          Estimates and Demographics," Journal of the American Academy of
          Audiology , pp. 183-189, 2001. <br /> [4] H. Tankovska, "Forecast of
          the internet user penetration rate in Sweden 2018-2024," 4 March 2020.
          [Online]. Available:
          https://www.statista.com/statistics/567607/predicted-internet-user-penetration-rate-in-sweden/.
          <br /> [5] PRB, "The Top 50 Countries With the Largest Percentage of
          Older Adults," 21 April 2020. [Online]. Available:
          https://www.prb.org/countries-with-the-oldest-populations/. <br />
          [6] B. Trajkovska, "10 promising Sweden-based startups to watch in
          2020 and beyond," 2 March 2020. [Online]. Available:
          https://www.eu-startups.com/2020/03/10-promising-sweden-based-startups-to-watch-in-2020-and-beyond/.
          <br />
          [7] World Health Organization, "Deafness and hearing loss," 1 March
          2020. [Online]. Available:
          https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss.
          <br />
          [8] E. Vogels, "Millennials stand out for their technology use, but
          older generations also embrace digital life," 2019 September 9.
          [Online]. Available:
          https://www.pewresearch.org/fact-tank/2019/09/09/us-generations-technology-use/.
          <br />
          [9] H. Robertson, "Why Facebook has become so important to the sign
          language community," 16 January 2016. [Online]. Available:
          https://www.bbc.com/news/disability-35103292. <br />
          [10] Hörselskadades Riksförbund, "Att skaffa hörapparat," 24 April
          2020. [Online]. Available:
          https://hrf.se/kristianstad/om-oss/att-skaffa-horapparat/.
          <br />
          [11] Starkey, "Hearing aid costs and financing," 24 April 2020.
          [Online]. Available:
          https://www.starkey.com/hearing-aids/costs-and-financing. <br />
          [12] Bellman & Symfon, "Bellman & Symfon," 24 April 2020. [Online].
          Available: https://bellman.com/sv/.
          <br /> [13] S. Dhillon, "InstaGrandmas: Is Selling To Seniors On
          Social Media Worth Your Brand Dollars?," 25 January 2019. [Online].
          Available:
          https://www.forbes.com/sites/valleyvoices/2019/01/25/is-selling-to-seniors-on-social-media-worth-your-brand-dollars/#7ff479eb2159.{' '}
          <br />
          [14] Order 1049/2017, of June 15, of the Ministry of Social and Family
          Policies, which approves the regulatory bases for the granting of aid
          to promote personal autonomy and promote accessibility to people with
          disabilities in situation of difficulty or social vulnerability
          http://www.madrid.org/wleg_pub/secure/normativas/contenidoNormativa.jsf?opcion=VerHtml&nmnorma=9831#no-back-button
        </Text>
      </Container>
      <Footer />
    </>
  )
}
