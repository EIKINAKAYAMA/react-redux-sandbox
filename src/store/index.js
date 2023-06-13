import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const countReducer = (
  state = {
    count: 50,
  },
  action
) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        count: state.count + 1,
      };
    case "DECREASE_COUNT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const postsReducer = (
  state = {
    posts: [],
  },
  action
) => {
  switch (action.type) {
    case "FETCH_API":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export const fetchData = () => {
  return async (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_API", payload: data });
      });
  };
};

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
