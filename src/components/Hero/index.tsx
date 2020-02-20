import React, { useContext } from 'react'
import styled from 'styled-components'
/* import videoBackground from '../../../static/travelr_hero.mp4'
 */
import { smallerScreen, smallScreen } from '../../helpers/breakpoints'
import Navbar from '../Navbar'
import { BodyWrap } from '../../helpers/common'
import WebContext from '../../helpers/WebContext'
import { useMediaQuery } from 'react-responsive'
import { FaArrowDown } from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'
import Typist from 'react-typist'

const IntroBackground = styled.div`
  position: absolute;
  min-width: 100vw;
  min-height: 560px;
  height: 100%;
  background-position: right top;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: left;
  z-index: 9;
  background-image: linear-gradient(
    174deg,
    rgba(162, 60, 160, 0.75) 0%,
    rgba(79, 42, 171, 0.75) 100%
  );

  ${smallerScreen} {
    border-radius: 0 0 0 100px;
    height: 100%;
    background-image: linear-gradient(
      174deg,
      rgba(162, 60, 160, 0.55) 0%,
      rgba(79, 42, 171, 1.85) 100%
    );
  }
`

const BackgroundVideo = styled.video`
  min-width: 100vw;
  max-width: 100%;
  height: 100%;
  position: absolute;
  z-index: 8;
  object-fit: cover;
`

const MobileBackgroundImage = styled.div`
  min-width: 100vw;
  max-width: 100%;
  height: 100%;
  position: absolute;
  z-index: 8;
  object-fit: cover;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  border-radius: ${({ rounded }) => (rounded ? `0 0 0 100px` : '0')};
`

const IntroWrap = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  min-height: 560px;
  overflow: hidden;

  ${smallScreen} {
    height: 80vh;
  }
`

const MainTitle = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 3em;
  text-shadow: 1px 1px #000000;
  letter-spacing: 0.03rem;
  ${smallerScreen} {
    font-size: 1.9em;
    text-align: left;
    font-weight: 600;
    text-shadow: 1px 1px #0202023d;
  }
`

const Subtitle = styled.p`
  color: #fff;
  text-shadow: 1px 1px #000000;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.01rem;
  ${smallerScreen} {
    display: none;
  }
`

const DownloadButton = styled.div`
  display: inline-block;
  padding: 20px 60px;
  margin-top: 40px;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  background: #400b46;
  color: #fff;
  box-shadow: 0 0px 5px 4px rgba(42, 16, 70, 0.14);
  transition: background 0.3s;

  &:hover {
    background: #1a051d;
  }

  ${smallerScreen} {
    padding: 20px 0;
    width: 100%;
  }
`

const ScrollMore = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  bottom: 30px;
  color: #fff;
  text-align: center;
  z-index: 999;
  ${smallerScreen} {
    display: none;
  }
`

const IntroFlex = styled.div`
  display: block;
  position: absolute;
  top: 30vh;
  ${smallerScreen} {
    top: 35vh;
    padding: 0 1.5rem;
    box-sizing: border-box;
  }
`

const RelativeBodyWrap = styled(BodyWrap)`
  position: relative;
`

const Hero = () => {
  const { toggleDownloadModal } = useContext(WebContext)
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' })

  const data = useStaticQuery(graphql`
    query {
      mobileHeader: file(relativePath: { eq: "mobileHeader.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroBackground: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1980) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <IntroWrap>
      <IntroBackground>
        <Navbar />
        <RelativeBodyWrap>
          <IntroFlex>
            <MainTitle fontSize={5}>Traveling in Japan?</MainTitle>
            <Typist cursor={{ show: false }} avgTypingDelay={100}>
              <MainTitle fontSize={5}>
                <span>Travel better...</span>
                <Typist.Backspace count={9} delay={1500} />
                <span>and explore...</span>
                <Typist.Backspace count={14} delay={1500} />
                <span>social!</span>
              </MainTitle>
            </Typist>
            <Subtitle>
              Karaoke, secret walks & ramen... hang out locals & travelers in
              Japan
            </Subtitle>
            <DownloadButton onClick={() => toggleDownloadModal()}>
              Find events & hang out
            </DownloadButton>
          </IntroFlex>
        </RelativeBodyWrap>

        <ScrollMore>
          <FaArrowDown />
        </ScrollMore>
      </IntroBackground>

      {/* {!isMobile && (
        <BackgroundVideo id="background-video" loop autoPlay muted>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
      )} */}

      {isMobile ? (
        <MobileBackgroundImage
          url={data.mobileHeader.childImageSharp.fluid.src}
          rounded
        />
      ) : (
        <MobileBackgroundImage
          url={data.heroBackground.childImageSharp.fluid.src}
        />
      )}
    </IntroWrap>
  )
}

export default Hero
