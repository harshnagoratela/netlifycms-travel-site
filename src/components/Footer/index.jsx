import React from 'react'
import styled from 'styled-components'
import { BodyWrap } from '../../helpers/common'

const FooterWrap = styled.div`
  height: 60px;
  border-top: 1px solid #dedede;
  display: flex;
  align-items: center;
`

const Footer = () => {
  return (
    <FooterWrap>
      <BodyWrap>© 2019 Travelr | All Rights Reserved</BodyWrap>
    </FooterWrap>
  )
}

export default Footer
