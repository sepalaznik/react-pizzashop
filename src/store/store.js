import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index.js";

const composeEnchaners = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
    rootReducer,
    composeEnchaners(applyMiddleware(thunk)),
);

export default store;
