import * as actionTypes from './actionTypes'

export const addTodo = (payload) => {
    return{
        type: actionTypes.ADD_ITEM,
        payload
    }
}

export const removeTodo = (payload) => {
    return{
        type: actionTypes.REMOVE_ITEM,
        payload
    }
}

export const handleCheckbox=(payload)=>{
    return{
        type: actionTypes.UPDATE_CHECKBOX,
        payload
    }
}