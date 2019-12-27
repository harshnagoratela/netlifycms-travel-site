import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Text } from '../common'
import { FaTimes } from 'react-icons/fa'
import ThemeContext from '../../helpers/WebContext'
import { smallerScreen } from '../../helpers/breakpoints'
import { useStaticQuery, graphql } from 'gatsby'

const Cover = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  position: fixed;
  background: rgba(25, 27, 39, 0.81);
  display: ${({ open }: any) => (open ? 'block' : 'none')};
  z-index: 8;
`

const ModalBody = styled.div`
  padding: 50px;
  box-sizing: border-box;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 8;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 100vh;
  text-align: left;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  ${smallerScreen} {
    width: 90%;
    padding: 20px;
  }
`

const CloseButton = styled.div`
  background: #f2f2f2;
  padding: 10px 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  font-weight: 500;
  font-size: 13px;
`
const Grid = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`

const DownloadIcon = styled.img`
  max-width: 130px;
  margin: 0 20px;
`

const Logo = styled.img`
  margin: 0 auto;
  margin-top: 100px;
  display: block;
  max-width: 65px;
`

const DownloadModal = () => {
  const { toggleDownloadModal, showDownloadModal } = useContext(ThemeContext)

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 65) {
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
    <>
      <ModalBody open={showDownloadModal}>
        <CloseButton onClick={() => toggleDownloadModal()}>
          <FaTimes style={{ marginRight: '10px' }} /> Close
        </CloseButton>

        <Logo src={data.logo.childImageSharp.fluid.src} />
        <Text
          fontSize={5}
          color="textBlack"
          mt={40}
          fontWeight="500"
          textAlign="center"
        >
          Download app to view events
        </Text>
        <Text
          fontSize={2}
          color="textGrey"
          mt={20}
          textAlign="center"
          mr={50}
          ml={50}
        >
          Our app is available on App store or Google play. It will connect you
          with nearby travelers and local. You can find all events there.
        </Text>
        <Grid>
          <div>
            <DownloadIcon src={data.appstore.childImageSharp.fluid.src} />
          </div>
          <div>
            <DownloadIcon src={data.googleplay.childImageSharp.fluid.src} />
          </div>
        </Grid>
      </ModalBody>
      <Cover open={showDownloadModal} onClick={() => toggleDownloadModal()} />
    </>
  )
}

export default DownloadModal
