/*
 !creating a store:
  * "createStore" method import from redux library
  *  The data kept in the store is categorized and a reducer is created for each category.
  * The created reducers are combined with the "combineReducers" method
  * Combined reducers created in the store are introduced
  * The created store is introduced to the project

 */

import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

// combining multiple reducers
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// creating store
const store = createStore(rootReducer);

export default store;
