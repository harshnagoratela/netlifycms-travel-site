import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Navbar from '../components/Navbar'
import { BodyWrap, HeaderBackground } from '../helpers/common'
import styled from 'styled-components'
import { smallerScreen } from '../helpers/breakpoints'

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

const PageBody = styled.div`
  margin-top: 50px;
`

const PostTitle = styled.h1`
  margin-top: 10px;
`

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <HeaderBackground>
        <Navbar />
        <BodyWrap>
          <MainTitle>{title}</MainTitle>
        </BodyWrap>
      </HeaderBackground>
      <BodyWrap>
        <PageBody>
          <PostTitle>{title}</PostTitle>
          <PageContent className="content" content={content} />
        </PageBody>
      </BodyWrap>
    </React.Fragment>
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

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
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
