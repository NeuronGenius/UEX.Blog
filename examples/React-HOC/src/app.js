/*
 * @Author: liyang 
 * @Date: 2018-10-20 00:21:14 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 18:49:44
 */
import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader'

import './styles.css'

@hot(module)
export default class App extends PureComponent {
  goto = url => {
    this.props.history.push(url)
  }

  render() {
    return (
      <>
        <button onClick={() => this.goto('/withHeader')}>
          基本用法：组件包裹
        </button>

        <button onClick={() => this.goto('/withLoading')}>
          反向继承：自动显示加载
        </button>

        <button onClick={() => this.goto('/withBind')}>
          属性代理：双向绑定
        </button>
      </>
    )
  }
}
