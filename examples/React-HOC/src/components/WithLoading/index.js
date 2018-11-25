/*
 * @Author: liyang 
 * @Date: 2018-10-20 22:21:14 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 18:44:23
 */
import React from 'react'
import { getDisplayName } from '../utils'
import './styles.css'

export default WrappedComponent => (
  class WithLoading extends WrappedComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`

    constructor(props) {
      super(props)
    }

    render() {
      return this.state.list.length === 0 ? (
        <div className="flex">
          <div className="loading">Loading...</div>
        </div>
      ) : (
        super.render()
      )
    }
  }
)