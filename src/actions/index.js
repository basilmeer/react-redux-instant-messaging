import * as types from "../constants/ActionTypes";

/** Set up the Actions */
let nextMessageId = 0;
let nextUserId = 0;

// Action: Add Message
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

// Action: Add User
export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
});

// Action: Message Received
export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});

// Action Populate Users List
export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
});
