import { combineReducers } from "redux";
import { items } from './reducers/index'

export const rootReducer = combineReducers({
    items
})