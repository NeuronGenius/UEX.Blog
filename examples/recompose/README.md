### 基本

> Recompose是一个React实用库，用于函数组件和高阶组件。把它想象成React的lodash。它提供了很多 HOC 的性能优化方案，能帮助你以函数和可测的方式抽取数据获取逻辑，HOC 组合和进行 props 操作。使你的代码清晰明了、易于阅读维护和测试。


#### 介绍几个相关概念

##### 函数组件 
> 函数式组件，有时也被称为无状态组件。本质上就是一个常规的函数，接收一个 props 并返回一个元素。

- 特点：
1. 无生命周期方法；
1. 只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用；
1. 没有this个ref。

##### 高阶组件 
> 高阶组件是一种接收组件为参数并返回一个新的组件的函数。（我们可以将函数式组件封装进高阶组件以解决状态处理和渲染优化这样的问题）


### 使用方法

> 下面简单介绍一下compose、pure、onlyUpdateForKeys、withState、withHandlers、withStateHandlers、withProps等方法的使用。更多API可查看[官方文档](https://github.com/acdlite/recompose/blob/master/docs/API.md)

- pure：效果与React.PureComponent相同
- shouldUpdate: 接收一个函数，和shouldComponentUpdate内容一致，具体参考代码
- onlyUpdateForKeys：如果指定的 props key 改变了才做更新

```
interface IProps {
  name: string
  title: string
  content: string
}
export const Base: SFC<IProps> = ({ name, title, content }) => {
  const time = new Date
  return (
    <p>
        <span>时间{time.getTime()}  </span>
        <span>姓名{name}  </span>
        <span>标题{title}  </span>
        <span>内容{content}  </span>
    </p>
  )
}

// 将SFC组件变成PureComponent组件

export const PureBaseComponent = pure(Base)

// 仅在 title发生变化的时候重新渲染组件

export const OnlyUpdateForKeysComponent = onlyUpdateForKeys(['title'])(Base)

// 接收一个方法 和生命周期中的和shouldComponentUpdate一致
// 返回一个布尔值控制是否重新渲染。

const checkPropsChange = (props:IProps, nextProps:IProps) =>
    (nextProps.name !== props.name
  && nextProps.title === '渲染')
export const ShouldUpdateComponent = shouldUpdate(checkPropsChange)(Base)


// 这些方法都是通过shouldComponentUpdate来控制组件的重渲
// 不用写类组件，比较简单，推荐使用。
```


- compose：可以组合多个高阶组件, 由下至上的组合;
- withState: 因为函数式组件中没有state，所以recompose提供了withState来满足。接收三个参数，stateName:  state的名称；stateUpdaterName:  改变state的函数； initialState:  初始值。
- withHandlers:和withState一起使用可以改变state的值。

```
interface IPropsBaseTwo extends IProps {
  onClick: () => void
  changeTitle: () => void
  changeContent: () => void
}

// 基础组件都差不多一致

export const BaseTwo: SFC<IPropsBaseTwo> = ({ name, title, content, onClick,
  changeTitle, changeContent }) => {
  const time = new Date
  return (
    <p>
        <span>时间{time.getTime()}  </span>
        <button onClick={onClick}>姓名{name}  </button>
        <button onClick={changeTitle}>标题{title}  </button>
        <button onClick={changeContent}>内容{content}  </button>
    </p>
  )
}
//  compose 将多个高阶组件组合起来，避免自己写层层套用， 推荐！

// withState 传入state名字，改变的方法名，初始值。
//单个的时候推荐这个用法，多个时推荐下面一种使用方式，请接着往下看

// withHandlers 可传入多个方法， 
// 对应组件中的props的方法。返回一个高阶函数接收withState里面的方法名。 

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

```


- withStateHandlers：其实就相当于上面两个方法的合集
- lifecycle： 可以集成生命周期 

```
const initialState = {
  name: 'zhangsan',
  title: 'buzhidao',
  content: '...'
}


// withStateHandlers 接受一个初始化state对象
// 第二个参数依旧是 对个方法的对象， 返回一个高阶函数可接收state的值。

const withStateHandlersCom  = withStateHandlers(initialState, {
  onClick: ({name}) => () => {
    return {name: 'xxxxx', title: '啦啦啦', content:'contentxxxdff'}
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
```

- withProps/mapProps：相似，将新的props合并的原来的props;
```
没有贴代码，更多方法可自行学习~
```

### 总结


1. 它们有助于防止滥用setState，而用props作为替代。
1. 鼓励 「smart」 和 「dumb」 component pattern（智能组件和木偶组件或者我认为是容器组件和展示组件）。
1. 它们鼓励代码应该有更多的复用性和模块化。
1. 不鼓励代码过长，变得复杂且负责太多的事情。
1. 它们允许React通过避免不必要的检查和内存分配来进行性能优化。
