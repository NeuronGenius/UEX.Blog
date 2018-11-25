/*
 * @Author: liyang 
 * @Date: 2018-10-21 18:42:54 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 19:23:19
 */
import React from 'react'
import { getDisplayName } from '../utils'

export default WrappedComponent => (
  class WithBind extends WrappedComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`

    constructor(props) {
      super(props)
    }

    state = {
      value: ''
    }

    onChange = e => {
      this.setState({
        value: e.target.value
      })
    }

    render() {
      const newProps = {
        withBind: {
          value: this.state.value,
          onChange: this.onChange
        },
        getValues: () => this.state
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
)