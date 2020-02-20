import React, { useContext } from 'react'
import styled from 'styled-components'
import { BodyWrap } from '../../helpers/common'
import { useStaticQuery, graphql } from 'gatsby'
import { smallerScreen } from '../../helpers/breakpoints'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
// @ts-ignore
import { useMediaQuery } from 'react-responsive'
import { Text, RoundedButton } from '../common'
import WebContext from '../../helpers/WebContext'

const UpcomingWrap = styled.div`
  background: rgba(9, 5, 76, 0.03);
  padding: 90px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 55px;
  ${smallerScreen} {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    padding: 0 20px;
  }
`

const Event = styled.div`
  ${smallerScreen} {
    padding: 0 30px;
  }
`

const EventTitle = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 0 1px 1px #000000;
`

const EventHeader = styled.div<{ background: string }>`
  display: block;
  height: 230px;
  width: 100%;
  background-image: url(${({ background }: any) => background});
  box-shadow: inset 0px -55px 60px -4px rgba(0, 0, 0, 1);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 6px;

  ${smallerScreen} {
    width: 100%;
    margin: 0 auto;
  }
`

const EventDescription = styled.p`
  font-size: ${({ theme }) => `${theme.fontSizes[1]}px`};
  color: ${({ theme }) => theme.colors.textGrey};
  margin-bottom: 20px;
  line-height: 20px;
  ${smallerScreen} {
    width: 100%;
  }
`

const Title = styled.h3`
  text-align: center;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.96);
  margin-bottom: 10px;
`

const MobileCarousel = styled(Carousel)`
  .carousel .slide {
    background: transparent;
  }

  .carousel.carousel-slider .control-arrow.control-prev {
    &:before {
      border-right: 8px solid #632ea8 !important;
    }
  }

  .carousel.carousel-slider .control-arrow.control-next {
    &:before {
      border-left: 8px solid #632ea8 !important;
    }
  }
`

const UpcomingEvents = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' })
  const { toggleDownloadModal } = useContext(WebContext)

  const data = useStaticQuery(graphql`
    query {
      karaoke: file(relativePath: { eq: "events/karaoke.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      harajuku: file(relativePath: { eq: "events/harajuku_secret_walk.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sake: file(relativePath: { eq: "events/sake_tasting.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (isMobile) {
    return (
      <UpcomingWrap>
        <Title>Upcoming events</Title>
        <Text color="textGrey" fontSize={1} mb="60px" textAlign="center">
          You don’t need to pay for a guide to have fun in Japan. Meet great
          friends on TRAVELR and hang out now.
        </Text>
        <MobileCarousel
          showThumbs={false}
          infiniteLoop
          showIndicators={false}
          selectedItem={1}
          showArrows={true}
          showStatus={false}
        >
          <Event>
            <EventHeader background={data.karaoke.childImageSharp.fluid.src}>
              <EventTitle>Takoyaki party</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <RoundedButton onClick={() => toggleDownloadModal()}>
              Reserve a spot
            </RoundedButton>
          </Event>
          <Event>
            <EventHeader background={data.sake.childImageSharp.fluid.src}>
              <EventTitle>Takoyaki party</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <RoundedButton onClick={() => toggleDownloadModal()}>
              Reserve a spot
            </RoundedButton>
          </Event>
          <Event>
            <EventHeader background={data.harajuku.childImageSharp.fluid.src}>
              <EventTitle>Takoyaki party</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <RoundedButton onClick={() => toggleDownloadModal()}>
              Reserve a spot
            </RoundedButton>
          </Event>
        </MobileCarousel>
      </UpcomingWrap>
    )
  }

  return (
    <UpcomingWrap>
      <BodyWrap>
        <Title>Upcoming events</Title>
        <Text color="textGrey" fontSize={1} mb={60} textAlign="center">
          You don’t need to pay for a guide to have fun in Japan. Meet great
          friends on TRAVELR and hang out now.
        </Text>
        <Grid>
          <Event>
            <EventHeader background={data.karaoke.childImageSharp.fluid.src}>
              <EventTitle>Karaoke</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <RoundedButton onClick={() => toggleDownloadModal()}>
              Reserve a spot
            </RoundedButton>
          </Event>
          <Event>
            <EventHeader background={data.sake.childImageSharp.fluid.src}>
              <EventTitle>Sake tasting</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <RoundedButton onClick={() => toggleDownloadModal()}>
              Reserve a spot
            </RoundedButton>
          </Event>
          <Event>
            <EventHeader background={data.harajuku.childImageSharp.fluid.src}>
              <EventTitle>Harajuku secret walk</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <RoundedButton onClick={() => toggleDownloadModal()}>
              Reserve a spot
            </RoundedButton>
          </Event>
        </Grid>
      </BodyWrap>
    </UpcomingWrap>
  )
}

export default UpcomingEvents
