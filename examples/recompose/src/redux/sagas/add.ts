import {  put, takeEvery } from 'redux-saga/effects'
import { TODO } from '../action/add'
function* goTodo(action:any){    // 参数是action创建函数返回的action
    yield put({      // dispatch一个action到reducer， payload是请求返回的数据
        type: TODO.DELETE_TODE,
        payload: 111   
    })
}

function* rootSaga() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
    yield takeEvery(TODO.ADD_TODE, goTodo)   // 如果有对应type的action触发，就执行AddNumber()函数
}

export default rootSaga