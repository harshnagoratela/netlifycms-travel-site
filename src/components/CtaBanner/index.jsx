import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { smallerScreen } from '../../helpers/breakpoints';

const Wrapper = styled.div`
  background-image: linear-gradient(174deg,rgba(162, 60, 160, 0.1) 0%,rgba(79, 42, 171, 0.1) 100%);
  border-radius: 16px;
  max-width: 960px;
  position: relative;
  min-height: 300px;
  margin: 150px auto 75px;
  display: flex;
  align-items: center;
  ${smallerScreen}{
    display: none;
  }
`

const Content = styled.div`
  margin-left: 60px;
  max-width: 500px;
`

const Title = styled.h3`
  font-size: 33px;
  color: rgba(0,0,0,0.80);
  margin: 0 0 15px 0;
`

const Subtitle = styled.div`
  font-size: 17px;
  color: rgba(0,0,0,0.80);
  line-height: 29px;
`

const PassportImage = styled.div`
  background-image: url(${({ background }) => background});
  background-size: contain;
  background-repeat: no-repeat;
  height: 400px;
  width: 250px;
  position: absolute;
  right: -50px;
  top: -75px;
  z-index: 9;
  ${smallerScreen}{
    display: none;
  }
`

const CtaBanner = () => {
  const data = useStaticQuery(graphql`
  query {
    passport: file(relativePath: { eq: "passport.png" }) {
      childImageSharp {
        fluid(maxHeight: 460) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <Wrapper>
      <Content>
        <Title>Ready to explore Japan</Title>
        <Subtitle>Download Travelr app, browse all upcoming events and network with other travelers.</Subtitle>
      </Content>
      <PassportImage background={data.passport.childImageSharp.fluid.src} />
    </Wrapper>
  );
}

export default CtaBanner;