/*
 * @Author: liyang 
 * @Date: 2018-10-20 01:32:27 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 16:23:32
 */
import React, { PureComponent } from 'react'
import WithHeader from './Components/WithHeader'

@WithHeader('我是头部')
export default class WithHeaderPage extends PureComponent {
  render() {
    return <div>我是一个普通组件</div>
  }
}
