import { takeEvery } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";

// Taking all actions of type ADD_MESSAGE and sending a message to the WebSocket
const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, action => {
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
