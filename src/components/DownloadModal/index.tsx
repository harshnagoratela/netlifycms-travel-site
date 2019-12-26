import React, { useContext } from 'react'
import styled from 'styled-components'
import { Text } from '../common'
import { FaTimes } from 'react-icons/fa'
import ThemeContext from '../../helpers/WebContext'

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(25, 27, 39, 0.81);
`

const ModalBody = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  bottom: 0;
  right: 0;
  background: #fff;
  height: 100%;
  width: 70%;
  padding: 50px;
  box-sizing: border-box;
  box-shadow: 0 -2px 3px 0 #848484a1;
`

const DownloadModal = () => {
  const { toggleDownloadModal } = useContext(ThemeContext)

  return (
    <Cover>
      <ModalBody>
        <div onClick={() => toggleDownloadModal()}>
          <FaTimes /> Close this
        </div>
        <Text fontSize={4} color="textBlack" mt={40}>
          Download Travelr app
        </Text>
        <Text fontSize={2} color="textGrey" mt={20}>
          Available on App store or Google play
        </Text>
      </ModalBody>
    </Cover>
  )
}

export default DownloadModal
