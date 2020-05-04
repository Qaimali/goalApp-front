import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import todo_Reducers from "./reducers/todo";
const rootReducers = combineReducers({
  todo_Reducers: todo_Reducers,
});
const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
