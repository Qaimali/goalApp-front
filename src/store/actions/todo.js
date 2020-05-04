import {
  ADD_TODO,
  EDIT_STATUS,
  EDIT_TASK,
  FETCH_TASKS,
  REMOVE_TASK,
} from "../constants/todo";
import store from "../index";
import { API_BASE_URL } from "../../config";

export function fetchTasks() {
  fetch(API_BASE_URL + "/todo").then((response) => {
    response
      .json()
      .then((data) => {
        
        store.dispatch({
          type: FETCH_TASKS,
          payload: data,
        });
        return;
      })
      .catch((err) => {
        
        
      });
  });
  return { type: "NEW", payload: "none" };
}
export function addtasks(task) {
  fetch(API_BASE_URL + "/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      task: task,
    }),
  }).then((response) => {
    
    response
      .json()
      .then((data) => {
        
        
        store.dispatch({
          type: ADD_TODO,
          payload: data,
        });
        return;
      })
      .catch((err) => {
        
        
        store.dispatch({
          type: ADD_TODO,
          payload: [],
        });
        return;
      });
  });

  return { type: "NEW", payload: "none" };
}
export function removetasks(taskId) {
  //alert(taskId + "action");
  fetch(API_BASE_URL + "/todo/" + taskId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => {
    store.dispatch({
      type: REMOVE_TASK,
      taskId: taskId,
    });
    return;
  });

  return { type: "NEW", payload: "none" };
}
export function editTasks(taskId, task) {
  //alert(taskId + "action");
  fetch(API_BASE_URL + "/todo/" + taskId + "/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      task: task,
    }),
  }).then((response) => {
    
    response
      .json()
      .then((data) => {
        store.dispatch({
          type: EDIT_TASK,
          taskId: taskId,
          task: task,
        });
        return;
      })
      .catch((err) => {
        store.dispatch({
          type: EDIT_TASK,
          taskId: taskId,
          task: task,
        });
        return;
      });
  });

  return { type: "NEW", payload: "none" };
}
export function editStatus(taskId, isDone) {
  //alert(taskId + "action");
  fetch(API_BASE_URL + "/todo/" + taskId + "/editStatus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      isDone: isDone,
    }),
  }).then((response) => {
    
    response
      .json()
      .then((data) => {
        
        
        store.dispatch({
          type: EDIT_STATUS,
          taskId: taskId,
          isDone: isDone,
        });
        return;
      })
      .catch((err) => {
        
        
        store.dispatch({
          type: EDIT_STATUS,
          taskId: taskId,
          isDone: isDone,
        });
        return;
      });
  });

  return { type: "NEW", payload: "none" };
}
