import * as actionTypes from '../actions/actionTypes'

const initialState = []

export const items= (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_ITEM:
            return [
                ...state,
                action.payload
            ];

        case actionTypes.REMOVE_ITEM:
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;

        case actionTypes.UPDATE_CHECKBOX:
            let todoArray=[];
            state.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            })
            return todoArray;

        default: return state;
    }
}