import {
  ADD_TODO,
  EDIT_STATUS,
  EDIT_TASK,
  FETCH_TASKS,
  REMOVE_TASK,
} from "../constants/todo";
const account_initialState = {
  todo: [],
};
export default function (state = account_initialState, action) {
  
  switch (action.type) {
    case FETCH_TASKS:
      var todoCopy = Object.assign([], state.todo);
      todoCopy = action.payload.data;
      return { ...state, todo: todoCopy };

    case ADD_TODO:
      var todoCopy = Object.assign([], state.todo);
      todoCopy.push(action.payload.data);
      return { ...state, todo: todoCopy };

    case EDIT_STATUS:
      var todoCopy = Object.assign([], state.todo);
      var index = todoCopy.findIndex((elem) => elem.id === action.taskId);
      todoCopy[index].isDone = action.isDone;
      return { ...state, todo: todoCopy };

    case EDIT_TASK:
      var todoCopy = Object.assign([], state.todo);
      var index = todoCopy.findIndex((elem) => elem.id === action.taskId);
      todoCopy[index].task = action.task;
      return { ...state, todo: todoCopy };

    case REMOVE_TASK:
      var todoCopy = Object.assign([], state.todo);
      var index = todoCopy.findIndex((elem) => elem.id === action.taskId);
      todoCopy.splice(index, 1);
      return { ...state, todo: todoCopy };

    default:
      return { ...state };
  }
}
