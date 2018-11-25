import React, { SFC } from 'react'
import { ItemType, ThemeContext } from '../CreateContext'
import Item from './Item'
import './ItemList.scss'

// export default class ItemList extends PureComponent<{}, {}> {
//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {
//                     ({ theme, list }) => (
//                         <div className="itemList"
//                             style={{ backgroundColor: theme.background }} >
//                             {
//                                 list.map((item: ItemType) => <Item key={item.id} {...item}/>)
//                             }
//                         </div>
//                     )
//                 }
//             </ThemeContext.Consumer>
//         )
//     }
// }
// 修改为无状态组件

const ItemList: SFC = () => (
    <ThemeContext.Consumer>
        {
            ({ theme, list }) => (
                <div className="itemList"
                    style={{ backgroundColor: theme.background }} >
                    {
                        list.map((item: ItemType) => <Item key={item.id} {...item} />)
                    }
                </div>
            )
        }
    </ThemeContext.Consumer>)

export default ItemList