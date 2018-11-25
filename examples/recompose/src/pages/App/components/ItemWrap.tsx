import React, {  ComponentType, PureComponent } from 'react'
import { IThemes, ThemeContext } from '../CreateContext'
interface IProps {
    theme: IThemes
}
export default (TitleComponent: ComponentType<IProps>) => {
    return (Component: ComponentType<IProps>) => {
        return class ItemWrap extends PureComponent {
            public render() {
                return (
                    <ThemeContext.Consumer>
                        {
                            ({ theme }) => <div>
                                <TitleComponent theme={theme} {...this.props} />
                                <Component theme={theme} {...this.props} />
                            </div>
                        }
                    </ThemeContext.Consumer>
                )
            }
        }
    }
}