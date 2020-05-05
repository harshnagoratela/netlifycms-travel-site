import React from 'react'
import styled from 'styled-components'
import { BodyWrap } from '../../helpers/common'
import Navbar from '../Navbar.amp'
import { useStaticQuery, graphql } from 'gatsby'
import { smallerScreen } from '../../helpers/breakpoints'

const HeaderBackground = styled.div`
  height: 280px;
  width: 100%;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.18);
  object-fit: cover;
  background: ${({ url }) => `linear-gradient(
      174deg,
      rgba(162, 60, 160, 0.8),
      rgba(79,42,171, 0.8)
    ),url(${url})`};

  background-size: cover;
`

const MainTitle = styled.h1`
  margin-top: 60px;
  color: #fff;
  padding: 0 20px;
  letter-spacing: 0.01rem;
  font-weight: 500;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.29);
  ${smallerScreen} {
    font-size: 1.7rem;
  }
`

const Subtitle = styled.p`
  color: #fff;
  padding: 0 20px;
  letter-spacing: 0.01rem;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.29);
`

const PageHeader = ({ title, subtitle, image }) => {
  const data = useStaticQuery(graphql`
    query {
      heroBackground: file(relativePath: { eq: "page_header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1980) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const headerimage = image ? image : data.heroBackground;

  return (
    <HeaderBackground url={headerimage.childImageSharp.fluid.src}>
      <Navbar />
      <BodyWrap>
        <MainTitle>{title}</MainTitle>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </BodyWrap>
    </HeaderBackground>
  )
}

export default PageHeader
