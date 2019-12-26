import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import Sticky from 'react-stickynode'

const Wrapper = styled.div`
  background-image: linear-gradient(
    174deg,
    rgba(162, 60, 160, 0.1) 0%,
    rgba(79, 42, 171, 0.1) 100%
  );
  border-radius: 16px;
  padding: 25px;
`

const Title = styled.h4`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 0 20px 0;
`

const Text = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.66);
  line-height: 24px;
  margin-bottom: 30px;
`

const AppImage = styled.img`
  max-height: 240px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  margin-top: 50px;
`

const GooglePlayIcon = styled.img`
  max-height: 50px;
  width: 100%;
`

const AppStoreIcon = styled.img`
  width: 100%;
  max-height: 50px;
  margin-bottom: 10px;
`

const DesktopBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      app: file(relativePath: { eq: "app.png" }) {
        childImageSharp {
          fluid(maxHeight: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      appstore: file(relativePath: { eq: "appstore.png" }) {
        childImageSharp {
          fluid(maxHeight: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      googleplay: file(relativePath: { eq: "googleplay.png" }) {
        childImageSharp {
          fluid(maxHeight: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Sticky enabled={true} top={40} bottomBoundary='#content'>
      <Wrapper>
        <Title>Ready to explore Japan?</Title>

        <Text>
          Download Travelr app, browse all upcoming events and network with
          other travelers.
        </Text>

        <Grid>
          <AppImage src={data.app.childImageSharp.fluid.src} />
          <div>
            <AppStoreIcon src={data.appstore.childImageSharp.fluid.src} />
            <GooglePlayIcon src={data.googleplay.childImageSharp.fluid.src} />
          </div>
        </Grid>
      </Wrapper>
    </Sticky>
  )
}

export default DesktopBanner
