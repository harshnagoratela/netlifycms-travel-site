import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import Navbar from '../../components/Navbar'
import { BodyWrap } from '../../helpers/common'
import Footer from '../../components/Footer'
import { smallerScreen } from '../../helpers/breakpoints'
import SingleArticle from '../../components/SingleArticle'
import BlogRoll from '../../components/BlogRoll'

const BlogBackground = styled.div`
  height: 280px;
  width: 100%;
  background-position: right top;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: linear-gradient(174deg, #a23ca0 0%, #4f2aab 100%);
  text-align: center;
`

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

const Blog = () => (
  <Layout>
    <BlogBackground>
      <Navbar />
      <BodyWrap>
        <MainTitle>Japan travel tips</MainTitle>
        <Subtitle>
          Food, places, people… We are writing about everything
        </Subtitle>
      </BodyWrap>
    </BlogBackground>

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
        <div>Banner</div>
      </BlogBody>
    </BodyWrap>
  </Layout>
)

export default Blog
