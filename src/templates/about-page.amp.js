import React from 'react'
import _ from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../components/layout.amp'
import Content, { HTMLContent } from '../components/Content'
import { BodyWrap } from '../helpers/common'
import styled from 'styled-components'
import { smallerScreen } from '../helpers/breakpoints'
import SEO from '../components/seo'
import PageHeader from '../components/PageHeader.amp'

const PageBody = styled.div`
  margin-top: 50px;
  ${smallerScreen} {
    padding: 0 1rem;
  }
`

const PostTitle = styled.h1`
  margin-top: 10px;
`

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  //removing lazy loading paramater as it was failing AMP validation
  content = _.replace(content,new RegExp('loading="lazy"','g'),'')

  return (
    <>
      <SEO title={`${title} | Travelr app`} description={`At Travelr, we empower people to discover the joy of solo travel and explore the world with no fear. Download Travelr app, browse all upcoming events and network with locals and travelers.`} />
      <PageHeader title={title} />
      <BodyWrap>
        <PageBody>
          <PostTitle>{title}</PostTitle>
          <PageContent className="content" content={content} />
        </PageBody>
      </BodyWrap>
    </>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AMPAboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
