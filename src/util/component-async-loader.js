import React, { Component } from 'react'
import Loadable from 'react-loadable'
import Loading from 'components/Loading'

export default function (options) {
  const LoadableComponent = Loadable(Object.assign({
    loading: Loading
  }, options))

  return class AsyncComponent extends Component {
    render() {
      return <LoadableComponent />
    }
  }
}