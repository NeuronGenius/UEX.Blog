/*
 * @Author: liyang 
 * @Date: 2018-10-21 18:47:53 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 19:21:17
 */
import React, { PureComponent } from 'react'
import WithBind from './Components/WithBind'

@WithBind
export default class WithBindPage extends PureComponent {
  getValues = () => {
    const values = this.props.getValues()
    alert(JSON.stringify(values, null, 2))
  }

  render() {
    return (
      <>
        <h2>双向绑定</h2>

        <input type="text" {...this.props.withBind} />

        <pre>{JSON.stringify(this.props.getValues(), null, 2)}</pre>

        <button onClick={this.getValues}>获取value</button>
      </>
    )
  }
}
