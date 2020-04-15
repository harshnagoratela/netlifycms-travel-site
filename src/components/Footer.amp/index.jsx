import React from 'react'
import styled from 'styled-components'
import { BodyWrap } from '../../helpers/common'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { smallerScreen } from '../../helpers/breakpoints'
import DownloadModal from '../DownloadModal.amp'
import { Link } from 'gatsby'

const FooterWrap = styled.div`
  height: 60px;
  border-top: 1px solid #dedede;
  width: 100%;
  margin-top: 100px;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  ${smallerScreen} {
    padding: 20px 0;
    height: 100%;
    flex-direction: column-reverse;
  }
`

const Social = styled.div`
  ${smallerScreen} {
    margin-bottom: 10px;
  }
`

const Footer = () => {
  return (
    <FooterWrap>
      <DownloadModal />
      <BodyWrap>
        <Flex>
          TRAVELR INC. | TOKYO, JAPAN
          <Link to="/terms">Terms & privacy</Link>
          <Social>
            <a
              href="https://www.facebook.com/japansolotraveler/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                style={{ marginRight: '20px', color: '#5b2da9' }}
              />
            </a>
            <a
              href="https://www.instagram.com/travelrjapan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                style={{ marginRight: '20px', color: '#5b2da9' }}
              />
            </a>
          </Social>
        </Flex>
      </BodyWrap>
    </FooterWrap>
  )
}

export default Footer
