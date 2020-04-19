import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.amp'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'
import { smallerScreen } from '../helpers/breakpoints'
import SEO from '../components/seo'
import PageHeader from '../components/PageHeader.amp'
import ContactForm from '../components/ContactForm'

const BodyWrap = styled.div`
    margin: 0 auto;
    background-image: linear-gradient(
        174deg,
        rgba(162, 60, 160, 0.8),
        rgba(79,42,171, 0.8)
    );
`
const PageBody = styled.div`
  ${smallerScreen} {
    padding: 0 1rem;
  }
`

const Row = styled.div`
    &::after {
        content:"";
        clear:both;
        display:table;
    }
`

const Col = styled.div`
    float: left;
    width: 45%;
    color: #fff;
    padding: 1rem;
    ${smallerScreen} {
        width: 90%;
    }
`

const ContactPage = ({ data }) => {

    return (
        <Layout>
            <SEO title={`Contact Us | Travelr app`} />
            <PageHeader title={data.markdownRemark.frontmatter.title} />
            <BodyWrap>
                <PageBody>
                    <Row>
                        <Col>
                            <div 
                                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                            />
                        </Col>
                        <Col>
                            <ContactForm action="POST" />
                        </Col>
                    </Row>
                </PageBody>
            </BodyWrap>
        </Layout>
    )
}

export default ContactPage

export const contactPageQuery = graphql`
  query AMPContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
