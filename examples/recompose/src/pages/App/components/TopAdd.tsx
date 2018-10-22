import { Button, Switch } from 'antd'
import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { Dispatch } from 'redux'
import { AddNumber, DeleteNumber, IAction } from '../../../redux/action/add'
import { ItemType, ThemeContext } from '../CreateContext'
import Modal from './Modal'
import './TopAdd.scss'
// @connect<>()

const initialState = {
  visible: false,
  numberInit: 0,
}
interface IState {
  numberInit: number,
  visible: boolean
}
interface IProps {
  numberAdd: number,
  addNumber?(): void,
  deleteNumber?():void
}

class TopAdd extends PureComponent<IProps, IState> {
  public static defaultProps = {
    addNumber: () => { }
  }
  public readonly state: IState = initialState
  constructor(props: IProps) {
    super(props)
    this.addHandle = this.addHandle.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onOk = this.onOk.bind(this)
    this.addError = this.addError.bind(this)
  }

  public render() {
    const { addHandle, onCancel, addError } = this
    const { numberInit, visible } = this.state
    const { addNumber, numberAdd, deleteNumber } = this.props
    if (numberInit === 1) { return new Error() }
    return (
      <ThemeContext.Consumer>
        {
          ({ theme, list, add, changeChecked }) => (
            <div className="topAdd"
              style={{ backgroundColor: theme.background }}>
              <div>
                <Button
                  onClick={addHandle}
                  type={theme.type === 'light' ? "primary" : "default"}
                  icon="plus" />
                <Button
                  className="ml-10"
                  onClick={addError}
                  type={theme.type === 'light' ? "primary" : "default"}
                >Error Boundaries</Button>
            
                <Button onClick={addNumber}>
                  addNumber
                </Button>
                {numberAdd}

                <Button onClick={deleteNumber}>
                  deleteNumber
                </Button>
              </div>
              <Switch defaultChecked={true} onChange={changeChecked} />
              {visible && <Modal theme={theme}
                onCancel={onCancel}
                onOk={this.onOk.bind(this, add)}>
                <React.Fragment>
                  <p>新增todo</p>
                  <div>1111</div>
                </React.Fragment>
              </Modal>}
            </div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
  private addHandle(): void {
    this.setState({ visible: true })
  }
  private onCancel(): void {
    this.setState({ visible: false })
  }
  private onOk(callback: (item: ItemType) => void): void {
    callback({
      id: 0,
      type: 0,
      content: '',
      title: ''
    })
    this.setState({ visible: false })
  }
  private addError(): void {
    this.setState({ numberInit: 1 })
  }
}
function mapDispatchToProps(dispatch: Dispatch<IAction>) {
  return {
    addNumber: () => dispatch(AddNumber(1)),
    deleteNumber: () => dispatch(DeleteNumber(1))
  }
}
const TopAddPage = connect(
  (state: any) => {
    return { numberAdd: state.add.numberAdd }
  },
  mapDispatchToProps
)(TopAdd)

export default TopAddPage