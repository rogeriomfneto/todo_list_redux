import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_TODO,
  UNCHECK_TODO,
  SET_TITLE,
  UPLOAD_LIST,
} from "./constants";

export function addTodo(name) {
  return {
    type: ADD_TODO,
    name,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function checkTodo(id) {
  return {
    type: CHECK_TODO,
    id,
  };
}

export function uncheckTodo(id) {
  return {
    type: UNCHECK_TODO,
    id,
  };
}

export function setTitle(title) {
  return {
    type: SET_TITLE,
    title,
  };
}

export function uploadList(newList) {
  return {
    type: UPLOAD_LIST,
    newList,
  };
}
