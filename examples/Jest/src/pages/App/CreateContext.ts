import React from 'react'

export interface IThemes {
    background: string,
    itemBackground: string,
    type: string,
    titleBackground: string,
    color: string
}
export const newInfo = {
    id: 0,
    type: 0,
    content: '',
    title: ''
}
export const themes: { light: IThemes, dark: IThemes } = {
    light: {
        type: 'light',
        background: '#f5f5f5',
        titleBackground: '#fff',
        itemBackground: '#1890ff',
        color: '#282c34'
    },
    dark: {
        type: 'dark',
        background: '#282c34',
        titleBackground: '#8790a5',
        color: '#fff',
        itemBackground: '#5c6270',
    },
}
export const ThemeContext = React.createContext({
    theme: themes.light, 
    list: [newInfo], 
    add: (item: ItemType):void => {}, 
    changeChecked: (checked: boolean): void => {}
})

export interface ItemType {
    id: number,
    type: number,
    content: string,
    title: string
}