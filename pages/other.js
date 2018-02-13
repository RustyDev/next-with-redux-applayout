import React from 'react'
import { startClock, addCount, serverRenderClock } from '../store'

import applyLayout from '../modules/next-layouts'
import AppLayout from '../layouts/AppLayout'

import Page from '../components/Page'

class Counter extends React.Component {
  static layout = AppLayout

  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Page title='Other Page' linkTo='/' />
    )
  }
}

export default applyLayout(Counter);
