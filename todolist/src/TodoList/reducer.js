import { ADD_TODO, DELETE_TODO, CHECK_TODO, UNCHECK_TODO } from "./constants";

const defaultState = { index: 0 };

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
  const newTodo = createTodo(name, index.toString());
  return {
    ...state,
    [newTodo.id]: newTodo,
    index: index + 1,
  };
}

function handleDeleteTodo(state, action) {
  const newState = { ...state };
  const id = action.id;
  delete newState[id];
  return newState;
}

function handleCheckTodo(state, action, check) {
  const id = action.id;
  const newState = { ...state };
  if (newState.hasOwnProperty(id)) {
    newState[id].checked = check;
  }
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
    default:
      return state;
  }
}

export default reducer;
