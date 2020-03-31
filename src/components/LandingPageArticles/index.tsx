import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SingleArticle from '../SingleArticle'
import { BodyWrap } from '../../helpers/common'
import styled from 'styled-components'
import { smallScreen, mediumScreen } from '../../helpers/breakpoints'

const PostWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  margin-top: 50px;

  ${mediumScreen} {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`

const Title = styled.h2`
  margin-top: 50px;
  ${mediumScreen} {
    padding: 0 1rem;
  }
`

const MoreLink = styled.div`
display: inline-block;
padding: 5px 20px;
margin-top: 15px;
cursor: pointer;
border-radius: 40px;
font-weight: 500;
font-size: 18px;
text-align: center;
border: 1px solid #400b46;
color: #fff;
box-shadow: 0 0px 5px 4px rgba(42, 16, 70, 0.14);
transition: background 0.3s;
${mediumScreen} {
  margin-left: 20px;
}

&:hover {
  border: 1px solid #1a051d;
}

  
.link {
    cursor: pointer;
    font-weight: 400;
	text-decoration: none;
}

.link--arrowed {
	display: inline-block;
    height: 2rem;
    line-height: 2rem;
	
	.arrow-icon {
		position: relative;
		top: -1px;
		-webkit-transition: -webkit-transform 0.3s ease;
		transition: -webkit-transform 0.3s ease;
		transition: transform 0.3s ease;
		transition: transform 0.3s ease, -webkit-transform 0.3s ease;
		vertical-align: middle;
	}
	
	.arrow-icon--circle {
		transition: stroke-dashoffset .3s ease;
		stroke-dasharray: 95;
		stroke-dashoffset: 95;
	}
	
	&:hover {
		.arrow-icon {
			transform: translate3d(5px, 0, 0);
		}
		
		.arrow-icon--circle {
			stroke-dashoffset: 0;
		}
	}
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
      <MoreLink>
        <Link to="/blog" className="link link--arrowed">
          Read More...
          <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g fill="none" stroke="#1a051d" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
              <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
              <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
            </g>
          </svg>
        </Link>
      </MoreLink>

    </BodyWrap>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query LandingPageQuery {
        allMarkdownRemark(sort: {
          order: DESC, fields: [frontmatter___date]}, 
          filter: {frontmatter: {templateKey: {eq: "blog-post"}, featuredpost: {eq: true}}}, 
          limit: 2) {
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
