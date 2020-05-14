import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/layout.amp'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'
import { BodyWrap, HeaderBackground } from '../helpers/common'
import { smallerScreen } from '../helpers/breakpoints'
import { useMediaQuery } from 'react-responsive'
import DesktopBanner from '../components/DesktopBanner'
import SEO from '../components/seo'
import PageHeader from '../components/PageHeader.amp'

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
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
    padding: 20px;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .gatsby-resp-image-wrapper, img {
    max-width: 600px;
    margin-left: 0;
    margin-right: 0;
    ${smallerScreen} {
      max-width: 100%;
    }
  }
`

const Author = styled.div`
h5 {
  margin-bottom: 0px;
}

p {
  font-size: 14px;
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
    author,
    title,
    featuredImage,
}) => {
    const PostContent = contentComponent || Content
    const isMobile = useMediaQuery({ query: '(max-width: 992px)' })

    //removing lazy loading paramater as it was failing AMP validation
    content = _.replace(content, new RegExp('loading="lazy"', 'g'), '')

    return (
        <Layout>
            <SEO title={title} description={description} />
            <PageHeader image={featuredImage} />
            <BodyWrap>
                <BlogBody>
                    <div>
                        <GoBack to="/blog">All articles ></GoBack>
                        <PostTitle>{title}</PostTitle>
                        {featuredImage == null ? null : (
                            <amp-img
                                src={featuredImage.childImageSharp.fluid.src}
                                width={featuredImage.childImageSharp.fluid.presentationWidth}
                                height={featuredImage.childImageSharp.fluid.presentationHeight}
                                layout="responsive"
                            />
                        )}
                        <p>{description}</p>
                        <PostContent content={content} />
                        <Author>
                            <h5>{(author && author.name) ? author.name : ""}</h5>
                            <p>{(author && author.bio) ? author.bio : ""}</p>
                            <amp-img
                                src={(author && author.image) ? author.image.childImageSharp.fluid.src : ""}
                                width={(author && author.image) ? author.image.childImageSharp.fluid.presentationWidth : ""}
                                height={(author && author.image) ? author.image.childImageSharp.fluid.presentationHeight : ""}
                                layout="responsive"
                            />
                        </Author>
                    </div>
                    <div>
                        <div>{!isMobile && <DesktopBanner />}</div>
                    </div>
                </BlogBody>
            </BodyWrap>
        </Layout>
    )

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
            author={post.frontmatter.author}
            title={post.frontmatter.title}
            featuredImage={post.frontmatter.featuredimage}
        />
    )
}

export default BlogPost

export const ampPageQuery = graphql`
  query AMPBlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        author {
          name
          bio
          image{
            childImageSharp {
              fluid(maxHeight: 100) {
                src
                srcWebp
                presentationWidth
                presentationHeight
              }
            }
          }
        }
        tags
      }
    }
  }
`
