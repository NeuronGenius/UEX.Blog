import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ErrorBoundary from './components/ErrorBoundary'
import App from './pages/RecomposeExp'
import store from './redux/store/store'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()