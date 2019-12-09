import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { BodyWrap } from '../../helpers/common';
import { smallerScreen } from '../../helpers/breakpoints';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 725px 1fr;
  grid-column-gap: 20px;
  margin: 120px 0;

  ${smallerScreen}{
    grid-template-columns: 1fr;
    margin: 40px 0;
    padding: 0 20px;
  }
`

const BigImage = styled.img`
  width: 100%;
  height: 470px;

  ${smallerScreen}{
    height: auto;
  }
`

const SmallImage = styled.img`
  width: 100%;
  height: 220px;
  ${smallerScreen}{
    display: ${({ hideOnMobile }) => hideOnMobile ? "none" : "block"};
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridImages = () => {
  const data = useStaticQuery(graphql`
    query {
      grid1: file(relativePath: { eq: "grid_1.png" }) {
        childImageSharp {
          fluid(maxHeight: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      grid2: file(relativePath: { eq: "grid_2.png" }) {
        childImageSharp {
          fluid(maxHeight: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      grid3: file(relativePath: { eq: "grid_3.png" }) {
        childImageSharp {
          fluid(maxHeight: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BodyWrap>
      <Grid>
        <div>
          <BigImage src={data.grid1.childImageSharp.fluid.src} />
        </div>
        <Flex>
          <SmallImage src={data.grid2.childImageSharp.fluid.src} />
          <SmallImage src={data.grid3.childImageSharp.fluid.src} style={{ marginTop: "30px" }} hideOnMobile />
        </Flex>
      </Grid>
    </BodyWrap>
  );
}



export default GridImages;