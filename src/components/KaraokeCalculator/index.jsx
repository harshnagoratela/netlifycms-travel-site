import React from 'react'
import styled from 'styled-components'
import { BodyWrap } from '../../helpers/common'

const CalculatorWrap = styled.div`
  background: rgba(9, 5, 76, 0.03);
  padding: 50px 0;
  margin-top: 120px;
`

const Title = styled.h2`
  text-align: center;
  margin-top: 0;
`

const Subtitle = styled.div`
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.66);
`

const KaraokeCalculator = () => {
  return (
    <CalculatorWrap>
      <BodyWrap>
        <Title>Get discount online</Title>
        <Subtitle>
          Enter your details and we will calculate and sent you active discounts
          for Karaoke!
        </Subtitle>
      </BodyWrap>
    </CalculatorWrap>
  )
}

export default KaraokeCalculator
