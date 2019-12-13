import React from 'react'
import styled from 'styled-components'
import { BodyWrap } from '../../helpers/common'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { smallerScreen } from '../../helpers/breakpoints'

const FooterWrap = styled.div`
  height: 60px;
  border-top: 1px solid #dedede;
  width: 100%;
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
      <BodyWrap>
        <Flex>
          © 2019 Travelr | All Rights Reserved
          <Social>
            <FaFacebook
              style={{ marginRight: '20px', color: '#5b2da9' }}
              size={20}
            />
            <FaInstagram
              style={{ marginRight: '20px', color: '#5b2da9' }}
              size={20}
            />
            <FaTwitter
              style={{ marginRight: '20px', color: '#5b2da9' }}
              size={20}
            />
          </Social>
        </Flex>
      </BodyWrap>
    </FooterWrap>
  )
}

export default Footer
