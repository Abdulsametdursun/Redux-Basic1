import { ActionTypes } from "../actionTypes/todoTypes";

// creating fuction to create action
export const addTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: ActionTypes.EDIT_TODO,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET_TODO,
  payload,
});

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload,
  };
};
