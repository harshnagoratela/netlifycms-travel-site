import React from 'react'
import styled from 'styled-components'

const BlogContentBody = styled.div`
  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    line-height: 25px;
  }
`

export const HTMLContent = ({ content, className }) => (
  <BlogContentBody
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

const Content = ({ content, className }) => (
  <BlogContentBody className={className}>{content}</BlogContentBody>
)

export default Content
