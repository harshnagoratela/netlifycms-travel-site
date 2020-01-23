import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'

import { BodyWrap, HeaderBackground } from '../../helpers/common'
import { smallerScreen } from '../../helpers/breakpoints'
import Navbar from '../../components/Navbar'
import CtaBanner from '../../components/CtaBanner'
import { useStaticQuery } from 'gatsby'
import KaraokeCalculator from '../../components/KaraokeCalculator'

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
  display: grid;
  grid-template-columns: 60% 40%;
  grid-column-gap: 50px;
  margin-top: 120px;
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

const SecondaryTitle = styled.h2`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.96);
  margin-top: 50px;
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
      grid2: file(relativePath: { eq: "karaoke_2.png" }) {
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

      <HeaderBackground>
        <Navbar />
        <BodyWrap>
          <MainTitle>Karaoke</MainTitle>
          <Subtitle>
            Get discounts for Japan most beloved social activity
          </Subtitle>
        </BodyWrap>
      </HeaderBackground>

      <BodyWrap>
        <Grid>
          <KaraokeBody>
            <h1>About Karaoke</h1>
            <Paragraph>
              Life’s better with people—and now there’s a new way to meet them
              with local events and new app that made them possible. Every
              experience is selected and created by local people, so you can
              connect with othes easier than before.
            </Paragraph>

            <SecondaryTitle>Average prices across japan</SecondaryTitle>
            <Paragraph>
              Life’s better with people—and now there’s a new way to meet them
              with local events and new app that made them possible. Every
              experience is selected and created by local people, so you can
              connect with othes easier than before.
            </Paragraph>

            <PlacesWrap>
              {PRICES.map(place => (
                <Place>
                  <div>{place.name}</div>
                  <strong>{place.price}</strong>
                </Place>
              ))}
            </PlacesWrap>
          </KaraokeBody>

          <div>
            <KaraokeImage src={data.grid1.childImageSharp.fluid.src} />
            <ImageLabel>Typical karaoke room</ImageLabel>
            <KaraokeImage src={data.grid2.childImageSharp.fluid.src} />
            <ImageLabel>Popular karaoke chain in Shibuya</ImageLabel>
          </div>
        </Grid>
      </BodyWrap>

      <KaraokeCalculator />

      <CtaBanner />
    </Layout>
  )
}

export default KaraokePage
