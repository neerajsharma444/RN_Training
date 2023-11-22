import * as types from '../actions/types';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        tasks: [
          {
            id: Math.random().toString(),
            task: action.payload,
            completed: false,
          },
          ...state.tasks,
        ],
      };

    case types.DELETE_TASK:
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };

    case types.TOGGLE_TASK_STATUS:
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return {...task, completed: !task.completed};
          }
          return task;
        }),
      };

    case types.EDIT_TASK:
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {...task, task: action.payload.task};
          }
          return task;
        }),
      };

    default:
      return state;
  }
};

export default tasksReducer;
