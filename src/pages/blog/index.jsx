import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { BodyWrap } from '../../helpers/common'
import { smallerScreen } from '../../helpers/breakpoints'
import BlogRoll from '../../components/BlogRoll'
import DesktopBanner from '../../components/DesktopBanner'
import { useMediaQuery } from 'react-responsive'
import Tags from '../../components/Tags'
import PageHeader from '../../components/PageHeader'

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
      <PageHeader
        title="Japan travel tips"
        subtitle=" Food, places, people… We are writing about everything"
      />

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
