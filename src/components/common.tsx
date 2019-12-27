import { fontSize, color, margin, textAlign, lineHeight, fontWeight } from 'styled-system'
import styled from 'styled-components'
import { smallerScreen } from '../helpers/breakpoints'

export const Text = styled.div`
  ${fontSize}
  ${color}
  ${margin}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
`

export const RoundedButton = styled.div`
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