import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'
import { BodyWrap, HeaderBackground } from '../helpers/common'
import Navbar from '../components/Navbar'
import { smallerScreen } from '../helpers/breakpoints'
import { useMediaQuery } from 'react-responsive'
import DesktopBanner from '../components/DesktopBanner'
import SEO from '../components/seo'

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
  margin-bottom: 40px;

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

const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
`

const PostTitle = styled.h1`
  margin-top: 10px;
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' })

  return (
    <Layout>
      <SEO title={title} description={description} />
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
        <BlogBody>
          <div>
            <GoBack to="/blog">All articles ></GoBack>
            <PostTitle>{title}</PostTitle>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
          <div>
            <Topics>
              <h3>Topics</h3>
              <TopicWrap>
                <SingleTopic>Solo travels</SingleTopic>
                <SingleTopic>Trekking</SingleTopic>
              </TopicWrap>
            </Topics>
            <div>{!isMobile && <DesktopBanner />}</div>
          </div>
        </BlogBody>
      </BodyWrap>
    </Layout>
  )

  /*   return (
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    ) */
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
