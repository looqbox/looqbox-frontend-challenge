/* REACT */
import React from 'react'

/* ROUTER */
import { withRouter } from 'react-router-dom'

/* SCROLL TO TOP */
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) window.scrollTo(0, 0)
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
