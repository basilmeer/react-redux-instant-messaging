import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import "./index.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducers from "./reducers";
import handleNewMessage from "./sagas";
import setupSocket from "./sockets";
import username from "./utils/name";

// Set up the Saga middleware instancee
const sagaMiddleware = createSagaMiddleware();

// Allow the usage of Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a Store by passing in the reducers Reducer
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

// Set up the socket
const socket = setupSocket(store.dispatch, username);

// Run the Saga middleware
sagaMiddleware.run(handleNewMessage, { socket, username });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
