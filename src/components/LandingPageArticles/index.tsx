import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SingleArticle from '../SingleArticle'
import { BodyWrap } from '../../helpers/common'
import styled from 'styled-components'
import { smallScreen } from '../../helpers/breakpoints'

const PostWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  margin-top: 50px;

  ${smallScreen} {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`

const Title = styled.h2`
  margin-top: 50px;
  ${smallScreen} {
    padding: 0 1rem;
  }
`

const LandingPageArticles = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <BodyWrap>
      <Title>Latest Japan travel tips</Title>

      <PostWrap>
        {posts && posts.map(({ node: post }) => <SingleArticle post={post} />)}
      </PostWrap>
    </BodyWrap>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query LandingPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
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
    `}
    render={(data, count) => <LandingPageArticles data={data} count={count} />}
  />
)
