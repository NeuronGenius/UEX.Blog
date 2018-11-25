import { applyMiddleware, createStore, } from 'redux'
import createSagaMiddleware from 'redux-saga' // 引入redux-saga中的createSagaMiddleware函数
import reducer from '../reducer'
import rootSaga from '../sagas/add' // 引入saga

const sagaMiddleware = createSagaMiddleware() // 执行

export const store = createStore(
    reducer,
    // window.devToolsExtension ? window.devToolsExtension() : undefined, // dev-tools
    applyMiddleware(sagaMiddleware) // 中间件，加载sagaMiddleware
)

sagaMiddleware.run(rootSaga) // 执行rootSaga
export default store
