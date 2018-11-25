/*
 * @Author: liyang 
 * @Date: 2018-10-21 01:32:27 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 19:07:59
 */
import React, { PureComponent } from 'react'
import WithLoading from './Components/WithLoading'

@WithLoading
export default class WithLoadingPage extends PureComponent {
  state = {
    list: []
  }

  componentDidMount() {
    // 模拟请求数据
    setTimeout(() => {
      this.setState({
        list: ['上联：去年五放加里奥', '下联：今年三秀卢锡安', '横批：闪现回国']
      })
    }, 2000)
  }

  render() {
    const { list } = this.state
    return (
      <>
        <h2>加载完成</h2>

        {list.map((value, i) => {
          return <p key={i}>{value}</p>
        })}
      </>
    )
  }
}
