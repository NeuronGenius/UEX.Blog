import React, { PureComponent } from 'react'
import './App.scss'
import ItemList from './components/ItemList'
import TopAdd from './components/TopAdd'
import {  ItemType, IThemes, newInfo, ThemeContext , themes } from './CreateContext'

const initialState = {
    list: [newInfo],
    themes: themes.light
}
interface IState {
    themes: IThemes,
    list: ItemType[]
}
export default class App extends PureComponent<{}, IState> {
    public readonly state: IState = initialState
    constructor(props: {}) {
        super(props)
        this.changeChecked = this.changeChecked.bind(this)
        this.add = this.add.bind(this)
    }
    public render(): JSX.Element {
        const { changeChecked, add } = this
        const { list } = this.state
        return (
            <ThemeContext.Provider value={{ theme: this.state.themes, list, add, changeChecked }}>
                <div className="container">
                    <TopAdd />
                    <ItemList />
                </div>
            </ThemeContext.Provider>
        )
    }
    private changeChecked(checked: boolean): void {
        this.setState({
            themes: checked ? themes.light
                : themes.dark
        })
    }
    private add(item: ItemType): void {
        this.setState((prvState) => ({
            list: [...prvState.list, {...item, id: prvState.list.length }]
        }))
    }
}
