import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Navbar from '../../components/Navbar'
import { BodyWrap, HeaderBackground } from '../../helpers/common'
import { smallerScreen } from '../../helpers/breakpoints'
import BlogRoll from '../../components/BlogRoll'
import DesktopBanner from '../../components/DesktopBanner'
import { useMediaQuery } from 'react-responsive'

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

const BlogBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  grid-column-gap: 100px;
  margin-top: 50px;
  ${smallerScreen} {
    margin-top: 20px;
    grid-template-columns: 1fr;
    padding: 20px;
  }
`

const Topics = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.96);
  }

  ${smallerScreen} {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`

const TopicWrap = styled.div`
  display: flex;
  margin: 0 -8px;
`

const SingleTopic = styled.div`
  background: rgba(216, 216, 216, 0.28);
  border-radius: 3px;
  padding: 6px 15px;
  margin: 5px 8px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`

const Blog = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' })

  return (
    <Layout>
      <HeaderBackground>
        <Navbar />
        <BodyWrap>
          <MainTitle>Japan travel tips</MainTitle>
          <Subtitle>
            Food, places, people… We are writing about everything
          </Subtitle>
        </BodyWrap>
      </HeaderBackground>

      <BodyWrap>
        <Topics>
          <h3>Topics</h3>
          <TopicWrap>
            <SingleTopic>Solo travels</SingleTopic>
            <SingleTopic>Trekking</SingleTopic>
          </TopicWrap>
        </Topics>
        <BlogBody>
          <div>
            <BlogRoll />
          </div>
          <div>{!isMobile && <DesktopBanner />}</div>
        </BlogBody>
      </BodyWrap>
    </Layout>
  )
}

export default Blog
