import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import { smallerScreen } from '../../helpers/breakpoints'

const RecentPostsWrap = styled.div`
  
`

const FeaturedPostWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  padding: 5px;
  background-image: linear-gradient( 174deg,rgba(162,60,160,0.1) 0%,rgba(79,42,171,0.1) 100% );
  border-radius: 1px;
`

const PostPreview = styled.div`
  flex: 0 0 90px;
  flex-shrink: 0;
  margin-right: 15px;
  overflow: hidden;
  @media (max-width: 990px) {
    flex: 0 0 60px;
  }
  > a {
    display: block;
    transition: 0.15s ease-in-out;
    transform-origin: top left;
  }
`

const PostDetails = styled.div`
  flex-grow: 1;
  align-items: center;
`

const PostTitle = styled.div`
  font-weight: normal;
  font-size: 0.8em;

  a {
      color: #4F2AAB;
      text-decoration: none;
  }
  a: hover {
      text-decoration: underline;
  }
`

const SidebarRecentPosts = () => {
    const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, limit: 5) {
      edges {
        node {
          excerpt(pruneLength: 50)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 90, maxHeight: 60, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
  `)

    const { edges: posts } = data.allMarkdownRemark

    return (
        <RecentPostsWrap>
            <h3>Recent Posts</h3>
            {posts && posts.map(({ node: post }) =>
                <FeaturedPostWrapper key={post.id}>
                    {post.frontmatter.featuredimage == null ? null : (
                        <PostPreview className="post_preview">
                            <Link to={post.fields.slug}>
                                <Img fluid={post.frontmatter.featuredimage.childImageSharp.fluid} alt={post.frontmatter.title}/>
                            </Link>
                        </PostPreview>
                    )}
                    <PostDetails>
                        <PostTitle className="post_title">
                            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                        </PostTitle>
                    </PostDetails>
                </FeaturedPostWrapper>
            )}
        </RecentPostsWrap>
    )
}

export default SidebarRecentPosts
