import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_TODO,
  UNCHECK_TODO,
  SET_TITLE,
  UPLOAD_LIST,
} from "./constants";

const DEFAULT_TITLE = "To Do List";

const defaultState = {
  index: 0,
  title: DEFAULT_TITLE,
  todos: {},
};

function createTodo(name, index) {
  return {
    name,
    id: index,
    checked: false,
  };
}

function handleAddTodo(state, action) {
  const index = state.index;
  const name = action.name;
  if (!name) return state;
  const newTodo = createTodo(name, index.toString());
  const newTodos = { ...state.todos };
  newTodos[newTodo.id] = newTodo;
  return {
    ...state,
    todos: newTodos,
    index: index + 1,
  };
}

function handleDeleteTodo(state, action) {
  const newState = { ...state };
  const id = action.id;
  delete newState.todos[id];
  return newState;
}

function handleCheckTodo(state, action, check) {
  const id = action.id;
  const newState = { ...state };
  newState.todos[id].checked = check;
  return newState;
}

function handleSetTitle(state, action) {
  const newTitle = action.title;
  if (newTitle) return { ...state, title: newTitle };
  return state;
}

function handleUploadList(state, action) {
  const newList = action.newList;
  const newState = JSON.parse(newList);
  return newState;
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO:
      return handleAddTodo(state, action);
    case DELETE_TODO:
      return handleDeleteTodo(state, action);
    case CHECK_TODO:
      return handleCheckTodo(state, action, true);
    case UNCHECK_TODO:
      return handleCheckTodo(state, action, false);
    case SET_TITLE:
      return handleSetTitle(state, action);
    case UPLOAD_LIST:
      return handleUploadList(state, action);
    default:
      return state;
  }
}

export default reducer;
