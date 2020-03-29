import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { smallerScreen } from '../../helpers/breakpoints'
import styled from 'styled-components'
const _ = require('lodash')

const Topics = styled.div`
  margin-top: 40px;

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
  flex-wrap: wrap;
  margin: 0 -8px;
`

const SingleTopic = styled(Link)`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : 'rgba(216, 216, 216, 0.28)'};
  border-radius: 3px;
  padding: 6px 15px;
  margin: 5px 8px;
  font-size: 14px;
  color: ${({ active }) => (active ? ' #fff' : 'rgba(0, 0, 0, 0.8)')};
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`

const Tags = ({ activeTag }) => {
  const data = useStaticQuery(graphql`
    query TagsQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <>
      <Topics>
        <h3>Topics</h3>
        <TopicWrap>
          {data.allMarkdownRemark.group.map(tag => {
            const tagPath = `/tags/${_.kebabCase(tag.fieldValue)}/`

            return (
              <SingleTopic to={tagPath} key={tagPath} active={activeTag === tag.fieldValue}>
                {tag.fieldValue}
              </SingleTopic>
            )
          })}
        </TopicWrap>
      </Topics>
    </>
  )
}

export default Tags
