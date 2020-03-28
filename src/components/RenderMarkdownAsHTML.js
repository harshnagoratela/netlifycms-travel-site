import React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'

const RenderMarkdownAsHTML = ({ content, className }) => {
  content = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString()

  return (
    <span className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export default RenderMarkdownAsHTML
