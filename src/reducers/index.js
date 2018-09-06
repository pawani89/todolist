import { combineReducers } from 'redux';
import toDoList from './toDoList';
import selectedList from './selectedList'

export default combineReducers({
    toDoList,
    selectedList
})