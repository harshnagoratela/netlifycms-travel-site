import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import { BodyWrap } from '../helpers/common'
import styled from 'styled-components'
import { smallerScreen } from '../helpers/breakpoints'
import SEO from '../components/seo'
import PageHeader from '../components/PageHeader'

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

  return (
    <>
      <SEO title={`${title} | Travelr app`} />
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
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
