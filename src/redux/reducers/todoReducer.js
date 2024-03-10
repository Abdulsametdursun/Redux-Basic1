/* 
 !reducer:
 * decides how the store will change
 * reducer is a function and has two parameters:
 1. state: The latest status of the data held in the store
 2. action: It is the object that tells how the store is updated.
 *
 * the data returned to the reducer is the most current version of the store.
 
*/

import { ActionTypes } from "../actionTypes/todoTypes";

const initialState = {
  todos: [],
  length: 0,
  isEmpty: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // 2.step: When the "Add todo" action runs, it is decided what change will occur in the store.
    case ActionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      // Return the current version of the store
      // When determining the new value of the store, it is necessary to make sure that while updating a value in the object, the others do not change.
      return { ...state, todos: tempTodos };

    case ActionTypes.DELETE_TODO:
      // deleting id coming to payload
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      // return updated state
      return { ...state, todos: filteredTodos };

    case ActionTypes.EDIT_TODO:
      // Find the state of the element whose action comes with payload. Remove the old version of the state in the new array we will create. Add the new version that comes with the new payload.
      const updatedTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, todos: updatedTodos };

    case ActionTypes.SET_TODO:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
