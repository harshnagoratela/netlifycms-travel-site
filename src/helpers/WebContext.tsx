import React from 'react'

const defaultState = {
  showDownloadModal: false,
  toggleDownloadModal: () => {},
}

const WebContext = React.createContext(defaultState)

class WebProvider extends React.Component {
  state = {
    showDownloadModal: false,
  }

  toggleDownloadModal = () => {
    this.setState({ showDownloadModal: !this.state.showDownloadModal })
  }

  render() {
    const { children } = this.props
    const { showDownloadModal } = this.state
    return (
      <WebContext.Provider
        value={{
          showDownloadModal,
          toggleDownloadModal: this.toggleDownloadModal,
        }}
      >
        {children}
      </WebContext.Provider>
    )
  }
}
export default WebContext
export { WebProvider }
