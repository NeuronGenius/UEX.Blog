/*
 * @Author: liyang 
 * @Date: 2018-10-20 00:07:14 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 18:49:17
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './app'
import WithHeader from './withHeader'
import WithLoading from './withLoading'
import WithBind from './withBind'

const MyApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/withHeader" component={WithHeader} />
      <Route exact path="/withLoading" component={WithLoading} />
      <Route exact path="/withBind" component={WithBind} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<MyApp />, document.getElementById('root'))
