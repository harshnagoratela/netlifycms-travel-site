// breakpoints
const sm = 576
const md = 992
const lg = 1200
const xl = 1980

export const smallScreen = `@media all and (max-width: ${sm}px)`
export const smallerScreen = `@media all and (max-width: ${md - 1}px)`
export const mediumScreen = `@media all and (max-width: ${lg - 1}px)`
export const largeScreen = `@media all and (min-width: ${lg}px) and (max-width: ${xl -
  1}px)`
export const xlScreen = `@media all and (min-width: ${xl}px)`
