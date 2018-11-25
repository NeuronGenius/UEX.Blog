import { Button } from 'antd'

import React, { SFC } from 'react'
import { compose, lifecycle, onlyUpdateForKeys, pure, shouldUpdate, withHandlers, withState, withStateHandlers } from 'recompose'

export default () => {
  return <p>模块一</p>
}

interface IProps {
  name: string
  title: string
  content: string
}
export const Base: SFC<IProps> = ({ name, title, content }) => {
  const time = new Date
  return (
    <p>
        <span className="ml-10">时间{time.getTime()}  </span>
        <span className="ml-10">姓名{name}  </span>
        <span className="ml-10">标题{title}  </span>
        <span className="ml-10">内容{content}  </span>
    </p>
  )
}
const checkPropsChange = (props:IProps, nextProps:IProps) =>
    (nextProps.name !== props.name
  && nextProps.title === '渲染')

export const PureBaseComponent = pure(Base)
export const OnlyUpdateForKeysComponent = onlyUpdateForKeys(['title'])(Base)
export const ShouldUpdateComponent = shouldUpdate(checkPropsChange)(Base)


interface IPropsBaseTwo extends IProps {
  onClick: () => void
  changeTitle: () => void
  changeContent: () => void
}
export const BaseTwo: SFC<IPropsBaseTwo> = ({ name, title, content, onClick,
  changeTitle, changeContent }) => {
  const time = new Date
  return (
    <p>
        <span>时间{time.getTime()}  </span>
        <Button type="primary" className="ml-10" onClick={onClick}>姓名{name}  </Button> 
        <Button type="primary" className="ml-10" onClick={changeTitle}>标题{title}  </Button> 
        <Button type="primary" className="ml-10" onClick={changeContent}>内容{content}  </Button>
    </p>
  )
}
export const WithStateComponent = compose(
  pure,
  withState('name', 'changeName', 'zhangsan'),
  withState('title', 'changeTitle', 'buzhidao'),
  withState('content', 'changeContent', '...'),
  withHandlers({
    onClick: ({changeName}) => () => {
      changeName('changeName')
    },
    changeTitle: ({changeTitle}) => () => {
      changeTitle('changeTitle')
    },
    changeContent: ({changeContent}) => () => {
      changeContent('changeContent')
    }
  })
)(BaseTwo)

const initialState = {
  name: 'zhangsan',
  title: 'buzhidao',
  content: '...'
}
const withStateHandlersCom  = withStateHandlers(initialState, {
  onClick: ({name}) => () => {
    return {content:'contentxxxdff'}
  }
})

export const WithStateHandlersComponent = compose(
  pure,
  withStateHandlersCom,
  lifecycle({
    componentDidMount() {
      this.setState({ name: 'lifecycle' })
    }
  }))(BaseTwo)