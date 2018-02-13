import React from 'react'
import delay from '../modules/delay'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount } from '../store'
import HeaderContainer from '../containers/HeaderContainer';


class AppLayout extends React.Component {
  static async getInitialProps () {
    return {
      delay: await delay(0)
    }
  }

  render () {

    const { children, ...otherProps } = this.props;
    const childrenWithProps = React.cloneElement(children, otherProps);

    return (
      <div>
        <HeaderContainer/>
        {/* Normally: {this.props.children} */}
        {/* The children need the store props though */}
        {childrenWithProps}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(AppLayout)
