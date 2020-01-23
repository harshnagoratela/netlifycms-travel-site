import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { HeaderBackground, BodyWrap } from '../helpers/common'
import Navbar from '../components/Navbar'
import Tags from '../components/Tags'
import { MainTitle, Subtitle, BlogBody } from '../pages/blog'
import SingleArticle from '../components/SingleArticle'
import DesktopBanner from '../components/DesktopBanner'
import SEO from '../components/seo'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag

    return (
      <Layout>
        <SEO title={`${tag} articles | Travelr app`} />
        <HeaderBackground>
          <Navbar />
          <BodyWrap>
            <MainTitle>{tag}</MainTitle>
            <Subtitle>Read about interesting Japan travel tips</Subtitle>
          </BodyWrap>
        </HeaderBackground>

        <BodyWrap>
          <Tags activeTag={tag} />
          <BlogBody>
            <div>
              {posts &&
                posts.map(({ node: post }) => <SingleArticle post={post} />)}
            </div>

            <div>
              <DesktopBanner />
            </div>
          </BlogBody>
        </BodyWrap>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            tags
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
