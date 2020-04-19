import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { smallerScreen } from '../../helpers/breakpoints'
import { BodyWrap } from '../../helpers/common'
import { Text } from '../common'

const StoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-column-gap: 30px;
  max-width: 900px;
  margin: 120px auto 0;
  ${smallerScreen} {
    grid-template-columns: 1fr;
    padding: 20px;
    margin: 40px auto 60px;
  }
`

const Heading = styled.h3`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.96);
`

const PersonWrap = styled.div`
  text-align: center;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.96);
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${smallerScreen} {
    grid-row: 2;
  }
`

const PersonPhoto = styled.img`
  margin-bottom: 10px;
`

const IFrameWrapper = styled.div`
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
  margin: 75px 0;

  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  ${smallerScreen} {
    width: 95%;
    margin: 0 auto;
  }
`

const StoryBox = () => {
  const data = useStaticQuery(graphql`
    query {
      founder: file(relativePath: { eq: "founder.png" }) {
        childImageSharp {
          fluid(maxHeight: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <StoryWrapper>
        <PersonWrap>
          <div>
            <PersonPhoto src={data.founder.childImageSharp.fluid.src} />
          </div>
          <div>
            <strong>Ema</strong>, Travelr founder
          </div>
        </PersonWrap>
        <div>
          <Heading>
            “We want you to see Japan from different point of view”
          </Heading>

          <Text lineHeight="29px">
            Life’s better with people—and now there’s a new way to meet them
            with local events and new app that made them possible. Every
            experience is selected and created by local people, so you can
            connect with others easier than before.
          </Text>
        </div>
      </StoryWrapper>
      <BodyWrap>
        <IFrameWrapper>
          <iframe
            width="1100"
            height="315"
            src="https://www.youtube.com/embed/epQBh8F7Cks"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

        </IFrameWrapper>
      </BodyWrap>
    </React.Fragment>
  )
}

export default StoryBox
