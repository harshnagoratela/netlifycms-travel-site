import React from 'react'
import styled from 'styled-components'
import { BodyWrap } from '../../helpers/common'
import { useStaticQuery, graphql } from 'gatsby'
import { smallerScreen } from '../../helpers/breakpoints'
import { useMediaQuery } from 'react-responsive'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const UpcomingWrap = styled.div`
  background: rgba(9, 5, 76, 0.03);
  padding: 60px 0;
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

const Event = styled.div``

const EventButton = styled.div`
  background-image: linear-gradient(180deg, #662fa8 1%, #5b2da9 100%);
  border-radius: 30px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding: 16px 0;
  max-width: 220px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-image: linear-gradient(180deg, #5b2da9 1%, #662fa8 100%);
  }

  ${smallerScreen} {
    margin-bottom: 10px;
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

const EventHeader = styled.div`
  display: block;
  height: 230px;
  width: 100%;
  background-image: url(${({ background }) => background});
  box-shadow: inset 0px -55px 60px -4px rgba(0, 0, 0, 1);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ${smallerScreen} {
    width: 90%;
    margin: 0 auto;
  }
`

const EventDescription = styled.p`
  font-size: 13px;
  color: rgba(18, 18, 18, 0.75);
  line-height: 20px;
  ${smallerScreen} {
    width: 90%;
  }
`

const Title = styled.h3`
  text-align: center;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.96);
  margin-bottom: 10px;
`

const Subtitle = styled.div`
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.66);
  margin-bottom: 60px;
`

const MobileCarousel = styled(Carousel)`
  .carousel .slide {
    background: transparent;
  }
`

const UpcomingEvents = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' })

  const data = useStaticQuery(graphql`
    query {
      karaoke: file(relativePath: { eq: "asakusa.jpg" }) {
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
        <Subtitle>
          You don’t need to pay for a guide to have fun in Japan. Meet great
          friends on TRAVELR and hang out now.
        </Subtitle>
        <MobileCarousel
          showThumbs={false}
          centerMode
          infiniteLoop
          showIndicators={false}
          selectedItem={2}
          showArrows={false}
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
            <EventButton>Reserve a spot</EventButton>
          </Event>
          <Event>
            <EventHeader background={data.karaoke.childImageSharp.fluid.src}>
              <EventTitle>Takoyaki party</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <EventButton>Reserve a spot</EventButton>
          </Event>
          <Event>
            <EventHeader background={data.karaoke.childImageSharp.fluid.src}>
              <EventTitle>Takoyaki party</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <EventButton>Reserve a spot</EventButton>
          </Event>
        </MobileCarousel>
      </UpcomingWrap>
    )
  }

  return (
    <UpcomingWrap>
      <BodyWrap>
        <Title>Upcoming events</Title>
        <Subtitle>
          You don’t need to pay for a guide to have fun in Japan. Meet great
          friends on TRAVELR and hang out now.
        </Subtitle>
        <Grid>
          <Event>
            <EventHeader background={data.karaoke.childImageSharp.fluid.src}>
              <EventTitle>Takoyaki party</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <EventButton>Reserve a spot</EventButton>
          </Event>
          <Event>
            <EventHeader background={data.karaoke.childImageSharp.fluid.src}>
              <EventTitle>Takoyaki party</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <EventButton>Reserve a spot</EventButton>
          </Event>
          <Event>
            <EventHeader background={data.karaoke.childImageSharp.fluid.src}>
              <EventTitle>Takoyaki party</EventTitle>
            </EventHeader>
            <EventDescription>
              Learn how to make Takoyaki and eat them with fellow travelers. We
              have three grills and lot of octopus ready!
            </EventDescription>{' '}
            <EventButton>Reserve a spot</EventButton>
          </Event>
        </Grid>
      </BodyWrap>
    </UpcomingWrap>
  )
}

export default UpcomingEvents
