import React, { useContext } from 'react'
// import { injectIntl } from "gatsby-plugin-intl"
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/Navbar'
import { BodyWrap } from '../helpers/common'
import GridImages from '../components/GridImages'
import UpcomingEvents from '../components/UpcomingEvents'
import StoryBox from '../components/StoryBox'
import CtaBanner from '../components/CtaBanner'
import { smallerScreen, mediumScreen } from '../helpers/breakpoints'
import { color, fontSize } from 'styled-system'
import WebContext from '../helpers/WebContext'
import { useStaticQuery, graphql } from 'gatsby'

const IntroBackground = styled.div`
  height: 400px;
  width: 100%;
  background-position: right top;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: linear-gradient(174deg, #a23ca0 0%, #4f2aab 100%);
  text-align: center;
  @media all and (max-width: 1400px) {
    border-radius: 0 0 0 200px;
  }

  ${smallerScreen} {
    border-radius: 0 0 0 100px;
  }
`

const MainTitle = styled.h1`
  margin-top: 90px;
  color: #fff;
  padding: 0 20px;
  text-align: center;
  ${fontSize}
  ${smallerScreen} {
    font-size: 2em;
    text-align: left;
    font-weight: 500;
    text-shadow: 1px 1px #0202023d;
  }
`

const Subtitle = styled.p`
  color: #fff;
  padding: 0 20px;
  text-align: center;
  ${fontSize}
  ${smallerScreen} {
    display: none;
  }
`
const TextIntroduction = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 140px auto;
  max-width: 80%;
  ${smallerScreen} {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: 80px auto;
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
    text-align: left;
    img {
      max-height: 300px;
      padding: 0;
    }
  }
`

const TextIntroductionText = styled.p`
  ${fontSize}
  ${color}
  line-height: 29px;
`

const DownloadButton = styled.div`
  display: inline-block;
  padding: 13px 40px;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  background: #400b46;
  color: #fff;
  margin: 10px 0 0 0;
  box-shadow: 0 0px 5px 4px rgba(42, 16, 70, 0.1411764705882353);
  transition: background 0.3s;

  &:hover {
    background: #1a051d;
  }
`

const IndexPage = ({ intl }) => {
  const { toggleDownloadModal } = useContext(WebContext)

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

      <IntroBackground>
        <Navbar />
        <BodyWrap>
          <MainTitle fontSize={5}>
            Share and experience Japan together
          </MainTitle>
          <Subtitle fontSize={1}>
            Explore, Eat, and Party with new friends on TRAVELR app.
          </Subtitle>
          <DownloadButton onClick={() => toggleDownloadModal()}>
            Get app!
          </DownloadButton>
        </BodyWrap>
      </IntroBackground>

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
      <CtaBanner />
    </Layout>
  )
}

export default IndexPage
