import { Button, Card, Steps } from 'antd'
import React, { PureComponent } from 'react'
import {
  OnlyUpdateForKeysComponent,
  PureBaseComponent,
  ShouldUpdateComponent,
  WithStateComponent,
  WithStateHandlersComponent
} from './ModuleBase'
const Step = Steps.Step
import './index.css'
const initialState = {
  current: 0,
  name: 'huangying',
  title: 'title',
  content: 'content',
  other: ''
}
interface IState {
  current: number,
  name: string
  title: string
  content: string
  other: string
}
export default class App extends PureComponent<{}, IState> {
  public readonly state: IState = initialState
  public render() {
    const { name, title, content, current } = this.state
    return (
      <Card className="recomposeExp">
        <Steps current={current} style={{ marginBottom: 8 }}>
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
        {current === 0 && <Card className="steps-content">
          <span className="title">Pure:</span>
          <PureBaseComponent name={name} title={title} content={content} />
          <span className="title">OnlyUpdateForKeys:</span>
          <OnlyUpdateForKeysComponent
            name={name}
            title={title}
            content={content}
          />
          <Button onClick={this.changeTitle.bind(this, { title: '改变title' + (new Date).getTime() })}>
            改变title
          </Button>
          <Button className="ml-10" onClick={this.changeTitle.bind(this, { name: '改变name' + (new Date).getTime() })}>
            改变name
          </Button>
          <Button className="ml-10" onClick={this.changeTitle.bind(this, { other: '改变其他' + (new Date).getTime() })}>
            改变其他
          </Button>

        </Card>}
        {current === 1 && <Card>
          <p className="title">shouldUpdate:</p>
          <ShouldUpdateComponent name={name} title="渲染" content={content} />
          <ShouldUpdateComponent name={name} title={title} content={content} />
          <Button onClick={this.changeTitle.bind(this, { name: '改变name2' + (new Date).getTime() })}>
            改变name
          </Button>
        </Card>}

        {current === 2 && <Card className="steps-content">
          <p className="title">withState:</p>
          <WithStateComponent />
        </Card>
        }
        {current === 3 && <Card className="steps-content">
          <p className="title">withStateHandlers:</p>
          <WithStateHandlersComponent />
        </Card>
        }
        {this.getButtonNode()}
      </Card>
    )
  }
  private changeTitle = (state: any) => {
    this.setState(state)
  }
  private next = () => {
    const current = this.state.current + 1
    this.setState({ current })
  }

  private prev = () => {
    const current = this.state.current - 1
    this.setState({ current })
  }
  private getButtonNode = () => {
    const { current } = this.state
    return <Card className="steps-action" style={{ marginTop: 8 }}>
      {
        current > 0
        && (
          <Button  onClick={this.prev}>
            上一步
      </Button>
        )
      }{
        current < 3
        && <Button className="ml-10" type="primary" onClick={this.next}>下一步</Button>
      }
      
    </Card>
  }
}
