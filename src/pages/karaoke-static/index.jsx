import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { BodyWrap } from '../../helpers/common'
import { smallerScreen } from '../../helpers/breakpoints'
import CtaBanner from '../../components/CtaBanner'
import { useStaticQuery } from 'gatsby'
import KaraokeCalculator from '../../components/KaraokeCalculator'
import PageHeader from '../../components/PageHeader'

const MainTitle = styled.h1`
  margin-top: 60px;
  color: #fff;
  padding: 0 20px;
  ${smallerScreen} {
    font-size: 1.7rem;
  }
`

const Subtitle = styled.p`
  color: #fff;
  padding: 0 20px;
`

const PRICES = [
  { name: 'Osaka', price: '2,800 ¥' },
  { name: 'Tokyo', price: '3,200 ¥' },
  { name: 'Kyoto', price: '2,000 ¥' },
]

const Grid = styled.div`
  max-width: 960px;
  margin: 60px auto 0;
  ${smallerScreen} {
    margin: 0 10px;
  }
`

const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  font-size: 14px;
  strong {
    font-weight: 500;
  }
`

const PlacesWrap = styled.div`
  margin-top: 50px;
  ${Place}:nth-child(odd) {
    background: rgba(139, 55, 163, 0.08);
    border-radius: 4px;
  }
`

const Paragraph = styled.p`
  font-size: 17px;
  color: rgba(0, 0, 0, 0.66);
  line-height: 29px;
`

const Deal = styled.div`
  border: 1px solid #dedede;
  padding: 20px;
  margin: 40px 0;
  border-radius: 6px;
  ${smallerScreen} {
    padding: 10px;
  }
`

const SecondaryTitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`

const KaraokeImage = styled.img`
  max-width: 100%;
`

const ImageLabel = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.57);
  margin: 10px auto 40px;
  text-align: center;
`

const KaraokeBody = styled.div``

const KaraokePage = () => {
  const data = useStaticQuery(graphql`
    query {
      grid1: file(relativePath: { eq: "karaoke_1.png" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      KaraokeSteffie: file(relativePath: { eq: "KaraokeSteffie.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coupon: file(relativePath: { eq: "coupon.png" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coupon_extend: file(relativePath: { eq: "coupon_extend.png" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={`Karaoke in Japan | Travelr app`} />

      <PageHeader
        title="Karaoke"
        subtitle=" Get discounts for Japan most beloved social activity"
      />

      <BodyWrap>
        <Grid>
          <KaraokeBody>
            <h1>About Karaoke</h1>
            <Paragraph>
              Karaoke (カラオケ) originated in Japan and is now popular around
              the world, especially in Asia... But in Japan, it’s still a
              beloved activity number one. One can also order food and drinks in
              most karaoke places and spend a good time together.
            </Paragraph>
            <KaraokeImage src={data.KaraokeSteffie.childImageSharp.fluid.src} />

            <br />
            <br />
            <SecondaryTitle>Karaoke deals from Travelr.me</SecondaryTitle>

            <Paragraph>
              Show this screen at the reception to get this special deal at
              Karaokekan Shibuya.
              <br />
              <strong>Karaokekan Shibuya Bunkamura Dori Branch</strong> <br />
              カラオケ館 渋谷文化村通り店 2−25−11 Dogenzaka, Shibuya City, Tokyo
              (Across from H&M )
              <br />
              <a href="https://goo.gl/maps/UT3D6FjNqT4B6cGP6" target="_blank">
                Google Map
              </a>
              <br />
              *This deal is only applicable at Karaokekan Shibuya location at
              the moment.
            </Paragraph>

            <Deal>
              <SecondaryTitle>2 hours karaoke + all you can drink</SecondaryTitle>
              <KaraokeImage src={data.coupon.childImageSharp.fluid.src} />
            </Deal>

            <Deal>
              <SecondaryTitle>If you like to EXTEND (encho)</SecondaryTitle>
              <Paragraph>
                Price for 2H (above) /4 ＝ Price for 30 mins <br />
                E.g. it is a Monday and you started from 7pm, extended for 30
                mins (until 9:30pm) ¥2,500/4 = ¥625 (per 30mins) ¥2,500+¥625=
                ¥3,125 (your total)
              </Paragraph>

              <KaraokeImage
                src={data.coupon_extend.childImageSharp.fluid.src}
              />
            </Deal>
            {/*         <PlacesWrap>
              {PRICES.map(place => (
                <Place>
                  <div>{place.name}</div>
                  <strong>{place.price}</strong>
                </Place>
              ))}
            </PlacesWrap> */}
          </KaraokeBody>

          {/*         <div>
            <KaraokeImage src={data.grid1.childImageSharp.fluid.src} />
            <ImageLabel>Typical karaoke room</ImageLabel>
            <KaraokeImage src={data.grid2.childImageSharp.fluid.src} />
            <ImageLabel>Popular karaoke chain in Shibuya</ImageLabel>
          </div> */}
        </Grid>
      </BodyWrap>

      {/*    <KaraokeCalculator /> */}

      <CtaBanner />
    </Layout>
  )
}

export default KaraokePage
