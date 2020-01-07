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
import Tags from '../../components/Tags'

export const MainTitle = styled.h1`
  margin-top: 60px;
  color: #fff;
  padding: 0 20px;
  ${smallerScreen} {
    font-size: 1.7rem;
  }
`

export const Subtitle = styled.p`
  color: #fff;
  padding: 0 20px;
`

export const BlogBody = styled.div`
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
        <Tags />
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
