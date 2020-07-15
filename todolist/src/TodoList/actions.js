import { ADD_TODO, DELETE_TODO, CHECK_TODO, UNCHECK_TODO } from "./constants";

function addTodo(name) {
  return {
    type: ADD_TODO,
    name,
  };
}

function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

function checkTodo(id) {
  return {
    type: CHECK_TODO,
    id,
  };
}

function uncheckTodo(id) {
  return {
    type: UNCHECK_TODO,
    id,
  };
}
