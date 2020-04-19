import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Text, RoundedButton } from '../common'

const ArticleWrap = styled.div`
  margin-bottom: 20px;

  amp-img {
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 220px;
    width: 100%;
  }
`

const Title = styled.h3`
  margin-top: 0;
  font-size: ${({ theme }) => `${theme.fontSizes[2]}px`};
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
  }
`

const ReadButton = styled(RoundedButton)`
  margin: 20px 0 0 0;
`;


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
        <amp-img
          src={
            post.frontmatter.featuredimage
              ? post.frontmatter.featuredimage.childImageSharp.fluid.src
              : 'https://via.placeholder.com/350x150'
          }
          width={post.frontmatter.featuredimage.childImageSharp.fluid.presentationWidth || 350}
          height={post.frontmatter.featuredimage.childImageSharp.fluid.presentationHeight || 150}
          layout="responsive"
        />
      </Link>
      <Text lineHeight="27px" mt={15}>
        {post.excerpt}
      </Text>
      <ReadMore to={post.fields.slug}>
        <ReadButton>Read full story</ReadButton>
      </ReadMore>
    </ArticleWrap>
  )
}

export default SingleArticle
