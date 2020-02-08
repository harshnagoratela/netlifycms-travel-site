import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { BodyWrap } from '../../helpers/common'
import { smallerScreen } from '../../helpers/breakpoints'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  margin: 70px 0 100px;

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
      grid1: file(relativePath: { eq: "grid_1.png" }) {
        childImageSharp {
          fluid(maxHeight: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grid2: file(relativePath: { eq: "grid_2.png" }) {
        childImageSharp {
          fluid(maxHeight: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grid3: file(relativePath: { eq: "grid_3.png" }) {
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
          <Title>Enjoy and share</Title>
          <Subtitle> meet other travelers and locals at our events</Subtitle>
          <Image src={data.grid1.childImageSharp.fluid.src} />
        </GridBlock>
        <GridBlock>
          <Title>Chat & ask</Title>
          <Subtitle>be part of Travelr community in Japan</Subtitle>
          <Image src={data.grid2.childImageSharp.fluid.src} />
        </GridBlock>

        <GridBlock>
          <Title>Meet locals</Title>
          <Subtitle>all events are free and created by local people</Subtitle>
          <Image src={data.grid3.childImageSharp.fluid.src} />
        </GridBlock>
      </Grid>
    </BodyWrap>
  )
}

export default GridImages
