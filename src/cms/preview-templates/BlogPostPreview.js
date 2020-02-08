import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => <div>{widgetFor('body')}</div>

export default BlogPostPreview
