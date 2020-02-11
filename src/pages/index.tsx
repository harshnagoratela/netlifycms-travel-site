import React from 'react'
// import { injectIntl } from "gatsby-plugin-intl"
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { BodyWrap } from '../helpers/common'
import GridImages from '../components/GridImages'
import UpcomingEvents from '../components/UpcomingEvents'
import StoryBox from '../components/StoryBox'
import CtaBanner from '../components/CtaBanner'
import { smallerScreen } from '../helpers/breakpoints'
import { color, fontSize } from 'styled-system'
import { useStaticQuery, graphql } from 'gatsby'
import Hero from '../components/Hero'
import LandingPageArticles from '../components/LandingPageArticles'

const TextIntroduction = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 140px auto;
  max-width: 80%;
  ${smallerScreen} {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: 80px auto;
    max-width: 100%;
  }
`

const TextIntroductionTitle = styled.h2`
  ${fontSize}
  ${color}
  margin-right: 40px;
  ${smallerScreen} {
    font-size: 26px;
    margin-bottom: 0;
  }
`

const IntroductionFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const AppImageWrapper = styled.div`
  text-align: right;
  img {
    padding-right: 80px;
    max-height: 400px;
  }
  ${smallerScreen} {
    display: none;
  }
`

const TextIntroductionText = styled.p`
  ${fontSize}
  ${color}
  line-height: 29px;
`

const IndexPage = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      app: file(relativePath: { eq: "app.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Share and experience Japan together | Travelr app" />
      <Hero />
      <GridImages />
      <BodyWrap>
        <TextIntroduction>
          <AppImageWrapper>
            <img src={data.app.childImageSharp.fluid.src} />
          </AppImageWrapper>
          <IntroductionFlex>
            <TextIntroductionTitle fontSize={5} color="textBlack">
              Have a trip to Japan ahead?
            </TextIntroductionTitle>
            <TextIntroductionText color="textGrey" fontSize={2}>
              Life’s better with people—and now there’s a new way to meet them
              with local events and new app that made them possible. Every
              experience is selected and created by local people, so you can
              connect with othes easier than before.
            </TextIntroductionText>
          </IntroductionFlex>
        </TextIntroduction>
      </BodyWrap>

      <UpcomingEvents />
      <StoryBox />

      <LandingPageArticles />
      <CtaBanner />
    </Layout>
  )
}

export default IndexPage
