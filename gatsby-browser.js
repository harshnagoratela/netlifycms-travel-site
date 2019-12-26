import React from "react"
import { WebProvider } from "./src/helpers/WebContext"
export const wrapRootElement = ({ element }) => (
  <WebProvider>{element}</WebProvider>
)