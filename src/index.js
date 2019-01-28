import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { addUser } from "./actions";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import chat from "./reducers";

// Create a Store by passing in the chat Reducer
const store = createStore(chat);

// Register ourselves as a user
store.dispatch(addUser("Me"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
