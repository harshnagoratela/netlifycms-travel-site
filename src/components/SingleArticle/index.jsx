import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ArticleWrap = styled.div`
  margin-bottom: 80px;
`

const Title = styled.h3`
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
  }
`

const Image = styled.div`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 220px;
  width: 100%;
`

const Description = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.66);
  line-height: 24px;
`

const ReadMore = styled(Link)`
  font-size: 14px;
  color: #5f2ea9;
  background: none;
  font-weight: 600;
  font-size: 14px;
`

const SingleArticle = ({ post }) => {
  return (
    <ArticleWrap>
      <Title>
        <Link to={post.fields.slug}>{post.frontmatter.title} </Link>
      </Title>

      <Link to={post.fields.slug}>
        <Image
          src={
            post.frontmatter.featuredimage
              ? post.frontmatter.featuredimage.childImageSharp.fluid.src
              : 'https://via.placeholder.com/350x150'
          }
        />
      </Link>
      <Description>{post.excerpt}</Description>
      <ReadMore to={post.fields.slug}>Read full story</ReadMore>
    </ArticleWrap>
  )
}

export default SingleArticle
