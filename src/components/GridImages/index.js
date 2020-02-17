import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { BodyWrap } from '../../helpers/common'
import { smallerScreen } from '../../helpers/breakpoints'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  margin: 120px 0;

  ${smallerScreen} {
    grid-template-columns: 1fr;
    margin: 40px 0;
    padding: 0 20px;
  }
`
const Title = styled.div`
  font-size: 1.4em;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`

const Subtitle = styled.div`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.textGrey};
  min-height: 25px;
  min-height: 50px;
`

const GridBlock = styled.div`
  text-align: center;
  ${smallerScreen} {
    margin-top: 50px;
  }
`

const Image = styled.img`
  width: auto;
  height: 216px;
  border-radius: 4px;
  margin-top: 20px;

  ${smallerScreen} {
    height: auto;
    max-width: 100%;
  }
`

const GridImages = () => {
  const data = useStaticQuery(graphql`
    query {
      grid1: file(relativePath: { eq: "landing-grid/grid_1.png" }) {
        childImageSharp {
          fluid(maxHeight: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grid2: file(relativePath: { eq: "landing-grid/grid_2.png" }) {
        childImageSharp {
          fluid(maxHeight: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grid3: file(relativePath: { eq: "landing-grid/grid_3.png" }) {
        childImageSharp {
          fluid(maxHeight: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BodyWrap>
      <Grid>
        <GridBlock>
          <Title>Hang out</Title>
          <Subtitle>Be spontaneous and jump into hang outs happing near you right now, like right now.</Subtitle>
          <Image src={data.grid1.childImageSharp.fluid.src} />
        </GridBlock>
        <GridBlock>
          <Title>Chit chat</Title>
          <Subtitle>Ask questions and get travel tips from locals & travelers.</Subtitle>
          <Image src={data.grid2.childImageSharp.fluid.src} />
        </GridBlock>

        <GridBlock>
          <Title>Get local</Title>
          <Subtitle>Hang out with locals like friends not tour guides.</Subtitle>
          <Image src={data.grid3.childImageSharp.fluid.src} />
        </GridBlock>
      </Grid>
    </BodyWrap>
  )
}

export default GridImages
