import React, { PureComponent, ReactChild } from 'react'
const initialState = {
    hasError: false
}
interface IState {
    hasError: boolean
}
interface IProps {
    children: ReactChild
}
export default class ErrorBoundary extends PureComponent<IProps, IState> {
    public readonly state: IState = initialState
    public render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return <h1 style={{textAlign: 'center', marginTop: 20}}>我是ErrorBoundary</h1>
        }
        return children
    }
    public componentDidCatch() {
        this.setState({ hasError: true })
    }
}
