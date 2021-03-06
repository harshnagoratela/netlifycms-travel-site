import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout.amp'
import SEO from '../../components/seo'
import { BodyWrap } from '../../helpers/common'
import GridImages from '../../components/GridImages'
import UpcomingEvents from '../../components/UpcomingEvents.amp'
import StoryBox from '../../components/StoryBox.amp'
import CtaBanner from '../../components/CtaBanner'
import { smallerScreen } from '../../helpers/breakpoints'
import { color, fontSize } from 'styled-system'
import { useStaticQuery, graphql } from 'gatsby'
import Hero from '../../components/Hero.amp'
import LandingPageArticles from '../../components/LandingPageArticles.amp'

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

const IndexPage = ({ data }) => {

  const homedata = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="Travelr: Hang out with locals & travelers in Japan" description="Meet travelers and locals when you travel in Japan, and make new friends to hang out with! Travelr is the ultimate app to discover must-do activities and events in Japan hand-picked by locals." />
      <Hero title={homedata.title} subtitle={homedata.subtitle} />
      <GridImages />
      <BodyWrap>
        <TextIntroduction>
          <AppImageWrapper>
            <img src={data.app.childImageSharp.fluid.src} />
          </AppImageWrapper>
          <IntroductionFlex>
            <TextIntroductionTitle>
              Have a trip to Japan ahead?
            </TextIntroductionTitle>
            <TextIntroductionText>
              Life’s better with people—and now there’s a new way to meet them
              with local events and new app that made them possible. Every
              experience is selected and created by local people, so you can
              connect with others easier than before.
            </TextIntroductionText>
          </IntroductionFlex>
        </TextIntroduction>
      </BodyWrap>
      <UpcomingEvents events={homedata.upcomingEvents} />
      <StoryBox />
      <LandingPageArticles />
      <CtaBanner />
    </Layout>
  )
}

export default IndexPage

export const landingPageQuery = graphql`
	query ampLandingPage {
	  markdownRemark(frontmatter: {templateKey: {eq: "landing-page"}}) {
      frontmatter {
        title
        subtitle
        upcomingEvents {
          title
          subtitle
          event {
            title
            body
            image {
              childImageSharp {
                fluid(maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
	  }
	  app: file(relativePath: { eq: "app.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
	}
`
