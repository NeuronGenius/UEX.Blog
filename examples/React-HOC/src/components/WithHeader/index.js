/*
 * @Author: liyang 
 * @Date: 2018-10-20 01:21:14 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 18:55:23
 */
import React, { PureComponent } from 'react'
import { getDisplayName } from '../utils'
import './styles.css'

export default (title = 'Header') => WrappedComponent => (
  class WithBind extends PureComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <>
          <header className="header">{title}</header>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
)