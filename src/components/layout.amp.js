/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme'
import Footer from './Footer.amp'

const GlobalStyle = createGlobalStyle`
 html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
  text-rendering: geometricPrecision;
}

`

const Layout = ({ children }) => {
  /*   const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <main>
            {children}
            {/* <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
            <Footer />
          </main>
        </>
      </ThemeProvider>
    </>
  )
}

export default Layout
