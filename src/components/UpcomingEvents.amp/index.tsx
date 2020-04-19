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

const MobileCarouselWrapper = styled.div`
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

const UpcomingEvents = (props: any) => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' })
  const { toggleDownloadModal } = useContext(WebContext)
  
  if (isMobile) {
    return (
      <UpcomingWrap>
        <Title>{props.events.title}</Title>
        <Text mb="40px" textAlign="center">{props.events.subtitle}</Text>
        <MobileCarouselWrapper>
          <Carousel
            showThumbs={false}
            infiniteLoop
            showIndicators={false}
            selectedItem={1}
            showArrows={true}
            showStatus={false}
          >
            {props.events.event && props.events.event.map((item) =>
              <Event>
                <EventHeader background={item.image.childImageSharp.fluid.src}>
                  <EventTitle>{item.title}</EventTitle>
                </EventHeader>
                <EventDescription>{item.body}</EventDescription>{' '}
                <RoundedButton onClick={() => toggleDownloadModal()}>
                  Reserve a spot
            </RoundedButton>
              </Event>
            )}
          </Carousel>
        </MobileCarouselWrapper>
      </UpcomingWrap>
    )
  }

  return (
    <UpcomingWrap>
      <BodyWrap>
        <Title>{props.events.title}</Title>
        <Text mb="60px" textAlign="center">{props.events.subtitle}</Text>
        <Grid>
          {props.events.event && props.events.event.map((item) =>
            <Event>
              <EventHeader background={item.image.childImageSharp.fluid.src}>
                <EventTitle>{item.title}</EventTitle>
              </EventHeader>
              <EventDescription>{item.body}</EventDescription>{' '}
              <RoundedButton onClick={() => toggleDownloadModal()}>
                Reserve a spot
            </RoundedButton>
            </Event>
          )}
        </Grid>
      </BodyWrap>
    </UpcomingWrap>
  )
}

export default UpcomingEvents
