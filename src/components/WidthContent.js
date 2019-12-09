import styled from "styled-components"

const WidthContent = styled.div`
  max-width: ${({ theme }) => theme.width + 10}px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
`

export default WidthContent
