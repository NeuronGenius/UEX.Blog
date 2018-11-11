import React, { SFC } from 'react'
import { ItemType, IThemes } from '../CreateContext'
import './Item.scss'
import ItemWrap from './ItemWrap'

interface IProps extends ItemType {
    theme: IThemes
}
// class Item extends PureComponent<IProps, {}> {
//     render() {
//         const { content, theme } = this.props
//         return (
//             <div
//                 className="todoContent"
//                 style={{ backgroundColor: theme.titleBackground, color: theme.color }}
//             >
//                 {content ? content : 'content'}
//             </div>
//         )
//     }
// }
// 改变为无状态组件

const Item: SFC<IProps> = ({ theme, content }) => (
    <div
        className="todoContent"
        style={{ backgroundColor: theme.titleBackground, color: theme.color }}
    >
        {content ? content : 'content'}
    </div>
)


// class Title extends PureComponent<IProps, {}> {
//     render() {
//         const { title, theme } = this.props
//         return (
//             <div
//                 className="todoTitle"
//                 style={{ backgroundColor: theme.itemBackground }}
//             >
//                 {title ? title : 'title'}
//             </div>
//         )
//     }
// }
// 改变为无状态组件


const Title: SFC<IProps> = ({ title, theme }) => (
    <div
        className="todoTitle"
        style={{ backgroundColor: theme.itemBackground }}
    >
        {title ? title : 'title'}
    </div>
)

export default ItemWrap(Title)(Item)
