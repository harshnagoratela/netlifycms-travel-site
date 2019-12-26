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
import { smallerScreen } from '../helpers/breakpoints'
import { color, fontSize } from 'styled-system'
import WebContext from '../helpers/WebContext'

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
  ${fontSize}
  ${smallerScreen} {
    font-size: 1.7rem;
  }
`

const Subtitle = styled.p`
  color: #fff;
  padding: 0 20px;
  ${fontSize}
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
  ${fontSize}
  ${color}
  margin-right: 40px;
  ${smallerScreen} {
    font-size: 26px;
    margin-bottom: 0;
  }
`

const TextIntroductionText = styled.p`
  ${fontSize}
  ${color}
  line-height: 29px;
`

const DownloadButton = styled.div`
  display: inline-block;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  background: #dedede;
  margin: 10px 0 0 20px;
`

const IndexPage = ({ intl }) => {
  const { toggleDownloadModal } = useContext(WebContext)
  return (
    <Layout>
      <IntroBackground>
        <Navbar />
        <BodyWrap>
          <MainTitle fontSize={5}>Have a trip to Japan ahead?</MainTitle>
          <Subtitle fontSize={1}>
            Explore, Eat, and Party with new friends on TRAVELR app.
          </Subtitle>
          <DownloadButton onClick={() => toggleDownloadModal()}>
            Get app!
          </DownloadButton>
        </BodyWrap>
      </IntroBackground>

      <BodyWrap>
        <TextIntroduction>
          <TextIntroductionTitle fontSize={5} color="textBlack">
            Share and experience Japan together
          </TextIntroductionTitle>
          <TextIntroductionText color="textGrey" fontSize={2}>
            Life’s better with people—and now there’s a new way to meet them
            with local events and new app that made them possible. Every
            experience is selected and created by local people, so you can
            connect with othes easier than before.
          </TextIntroductionText>
        </TextIntroduction>
      </BodyWrap>

      <GridImages />
      <UpcomingEvents />
      <StoryBox />
      <CtaBanner />
    </Layout>
  )
}

export default IndexPage
