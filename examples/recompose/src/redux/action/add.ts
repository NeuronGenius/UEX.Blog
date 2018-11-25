export const TODO = {
    ADD_TODE: 'ADD_TODE',
    DELETE_TODE: 'DELETE_TODE',
    GET_TODE: 'GET_TODE'
}
export interface IAction {
    type: string,
    payload?: any
}
export const AddNumber = (num: number): IAction => {
    return {
        type: TODO.ADD_TODE,
        payload: num
    }
}
export const DeleteNumber = (num: number): IAction => {
    return {
        type: TODO.DELETE_TODE,
        payload: num
    }
}