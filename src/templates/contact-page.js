import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'
import { smallerScreen } from '../helpers/breakpoints'
import SEO from '../components/seo'
import PageHeader from '../components/PageHeader'
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
const MobilePageHeader = styled.h1`
  margin: 0px;
  color: #fff;
  padding-top: 20px;
  padding-left: 20px;
  letter-spacing: 0.01rem;
  font-weight: 500;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.29);
  display: none;
  font-size: 1.7rem;
  ${smallerScreen} {
    display: block;
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
            <SEO title={`Contact Us | Travelr app`} description={`Travelr - For additional inquiries or comments, please contact us through this form.`}/>
            <PageHeader title={data.markdownRemark.frontmatter.title} />
            <BodyWrap>                
                <PageBody>
                    <MobilePageHeader>{data.markdownRemark.frontmatter.title}</MobilePageHeader>
                    <Row>
                        <Col>
                            <div 
                                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                            />
                        </Col>
                        <Col>
                            <ContactForm />
                        </Col>
                    </Row>
                </PageBody>
            </BodyWrap>
        </Layout>
    )
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
