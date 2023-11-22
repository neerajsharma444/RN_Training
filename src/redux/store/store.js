import {createStore, combineReducers} from 'redux';
import tasksReducer from '../reducers/tasksReducer';

const myreducer = combineReducers({
  tasks: tasksReducer,
});

const store = createStore(myreducer);

export default store;
