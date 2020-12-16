import { combineReducers } from "redux";

const reducers = combineReducers({
  // key => nama Reducer
  // value => fungsi Reducer
  // counter: CounterReducer,
  // products: ProductsReducer,
  auth: (prevState = { isLogin: false }, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...prevState,
          isLogin: true,
        };
      case "LOGOUT":
        return {
          ...prevState,
          isLogin: false,
        };
      default:
        return {
          ...prevState,
        };
    }
  },
});

export default reducers;