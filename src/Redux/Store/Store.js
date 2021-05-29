// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import api from "./MiddlewareApi/MiddlewareApi";
import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "../Reducer/Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// function exampleMiddleware(storeAPI) {
//   return function wrapDispatch(next) {
//     return function handleAction(action) {
//       // Do anything here: pass the action onwards with next(action),
//       // or restart the pipeline with storeAPI.dispatch(action)
//       // Can also use storeAPI.getState() here

//       console.log("action middleware", action);

//       return next(action);
//     };
//   };
// }

const middleware = applyMiddleware(thunk);

const combineReducer = combineReducers({
  AllProducts: productReducer,
});

export const store = createStore(
  combineReducer,
  composeWithDevTools(middleware)
);

// export const store = configureStore({
//   reducer: combineReducer,
//   middleware: [...getDefaultMiddleware(), api],
// });
