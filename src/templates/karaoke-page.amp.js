import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.amp'
import Content, { HTMLContent } from '../components/Content'
import { BodyWrap } from '../helpers/common'
import styled from 'styled-components'
import { smallerScreen } from '../helpers/breakpoints'
import SEO from '../components/seo'
import PageHeader from '../components/PageHeader.amp'
import CtaBanner from '../components/CtaBanner'
import RenderMarkdownAsHTML from '../components/RenderMarkdownAsHTML'

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

const Grid = styled.div`
  max-width: 960px;
  margin: 60px auto 0;
  ${smallerScreen} {
    margin: 0 10px;
  }
`

const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  font-size: 14px;
  strong {
    font-weight: 500;
  }
`

const PlacesWrap = styled.div`
  margin-top: 50px;
  ${Place}:nth-child(odd) {
    background: rgba(139, 55, 163, 0.08);
    border-radius: 4px;
  }
`

const Paragraph = styled.div`
  font-size: 17px;
  color: rgba(0, 0, 0, 0.66);
  line-height: 29px;
  p {
    margin: 0px;
  }
`

const Deal = styled.div`
  border: 1px solid #dedede;
  padding: 20px;
  margin: 40px 0;
  border-radius: 6px;
  ${smallerScreen} {
    padding: 10px;
  }
`

const SecondaryTitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`

const ImageLabel = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.57);
  margin: 10px auto 40px;
  text-align: center;
`

const KaraokeBody = styled.div`
  amp-img {
    max-width: 100%;
  }
`


const KaraokePage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <SEO title={`Karaoke in Japan | Travelr app`} />
            <PageHeader
                title={post.frontmatter.title}
                subtitle={post.frontmatter.subtitle}
            />
            <BodyWrap>
                <Grid>
                    <KaraokeBody>
                        <h1>{post.frontmatter.karaokebody.primarytitle}</h1>
                        <Paragraph><RenderMarkdownAsHTML content={post.frontmatter.karaokebody.primarypara} /></Paragraph>
                        <amp-img
                            src={post.frontmatter.karaokebody.image.childImageSharp.fluid.src}
                            width={post.frontmatter.karaokebody.image.childImageSharp.fluid.presentationWidth || 960}
                            height={post.frontmatter.karaokebody.image.childImageSharp.fluid.presentationHeight || 540}
                            layout="responsive"
                        />
                        <br />
                        <br />
                        <SecondaryTitle>{post.frontmatter.karaokebody.secondarytitle}</SecondaryTitle>
                        <Paragraph><RenderMarkdownAsHTML content={post.frontmatter.karaokebody.secondarypara} /></Paragraph>
                        {post.frontmatter.deal && post.frontmatter.deal.map((item) => (
                            <Deal>
                                <SecondaryTitle>{item.title}</SecondaryTitle>
                                <Paragraph><RenderMarkdownAsHTML content={item.body} /></Paragraph>
                                <amp-img
                                    src={item.image.childImageSharp.fluid.src}
                                    width={item.image.childImageSharp.fluid.presentationWidth || 820}
                                    height={item.image.childImageSharp.fluid.presentationHeight || 312}
                                    layout="responsive"
                                />
                            </Deal>
                        ))}
                    </KaraokeBody>
                </Grid>
            </BodyWrap>
            <CtaBanner />
        </Layout>
    )
}

export default KaraokePage

export const ampkaraokePageQuery = graphql`
query AMPKaraokePage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      subtitle
      karaokebody {
        primarytitle
        primarypara
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondarytitle
        secondarypara
      }
      deal {
        title
        body
        image {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
