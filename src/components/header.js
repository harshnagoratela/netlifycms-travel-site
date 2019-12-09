import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => {
  return (
    <>
      HEADER: {siteTitle}
    </>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
