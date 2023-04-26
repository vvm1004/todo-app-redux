import filtersReducer from '../components/Filters/FiltersSlide';
import todoListReducer from '../components/TodoList/TodoSlide';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
});
export default rootReducer;