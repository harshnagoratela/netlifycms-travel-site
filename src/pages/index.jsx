import React from 'react'
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
import Footer from '../components/Footer'
import { smallerScreen } from '../helpers/breakpoints'

const IntroBackground = styled.div`
  height: 500px;
  width: 100%;
  background-position: right top;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 0 0 0 600px;
  background-image: linear-gradient(174deg, #a23ca0 0%, #4f2aab 100%);
  ${smallerScreen} {
    border-radius: 0 0 0 100px;
  }
`

const MainTitle = styled.h1`
  margin-top: 140px;
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
const TextIntroduction = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 100px;
  ${smallerScreen} {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

const TextIntroductionTitle = styled.h2`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.96);
  margin-right: 40px;
  ${smallerScreen} {
    font-size: 26px;
    margin-bottom: 0;
  }
`

const TextIntroductionText = styled.p`
  font-size: 17px;
  color: rgba(0, 0, 0, 0.66);
  line-height: 29px;
`

const IndexPage = ({ intl }) => (
  <Layout>
    <IntroBackground>
      <Navbar />
      <BodyWrap>
        <MainTitle>Have a trip to Japan ahead?</MainTitle>
        <Subtitle>
          Explore, Eat, and Party with new friends on TRAVELR app.
        </Subtitle>
      </BodyWrap>
    </IntroBackground>

    <BodyWrap>
      <TextIntroduction>
        <TextIntroductionTitle>
          Share and experience Japan together
        </TextIntroductionTitle>
        <TextIntroductionText>
          Life’s better with people—and now there’s a new way to meet them with
          local events and new app that made them possible. Every experience is
          selected and created by local people, so you can connect with othes
          easier than before.
        </TextIntroductionText>
      </TextIntroduction>
    </BodyWrap>

    <GridImages />
    <UpcomingEvents />
    <StoryBox />
    <CtaBanner />
  </Layout>
)

export default IndexPage
