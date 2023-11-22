import * as types from './types';

export const addTask = task => ({
  type: types.ADD_TASK,
  payload: task,
});

export const deleteTask = id => ({
  type: types.DELETE_TASK,
  payload: id,
});

export const toggleTaskStatus = id => ({
  type: types.TOGGLE_TASK_STATUS,
  payload: id,
});

export const editTask = (id, task) => ({
  type: types.EDIT_TASK,
  payload: {id, task},
});
