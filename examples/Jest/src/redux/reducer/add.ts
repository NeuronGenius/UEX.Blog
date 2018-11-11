import { IAction, TODO } from '../action/add'
const initState = { numberAdd: 2 }
const add = (state: any = initState, action: IAction) => {
    switch (action.type) {    
        case TODO.ADD_TODE:
            return {
                ...state,
                numberAdd: state.numberAdd + action.payload
            }
        case TODO.DELETE_TODE:
            return {
                ...state,
                numberAdd: state.numberAdd - action.payload
            }
        default:
            return { ...state }
    }
}
export default add