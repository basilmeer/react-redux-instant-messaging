// Testing the actions
import { addMessage, addUser } from "../actions";
import * as types from "../constants/ActionTypes";

// Test if a message can be added
describe("adding a message", () => {
  it("should create an action to add a message with id 0", () => {
    const message = "Something";
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author: "Me",
      id: 0
    };
    expect(addMessage(message)).toEqual(action);
  });
});

// Test if a second message can be added
describe("adding a second message", () => {
  it("should create an action to add a message with id 1", () => {
    const message = "Something";
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author: "Me",
      id: 1
    };
    expect(addMessage(message)).toEqual(action);
  });
});

// Test if a user can be added
describe("adding a user", () => {
  it("should create a user with id 0", () => {
    const user = "Mark";
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0
    };
    expect(addUser(user)).toEqual(action);
  });
});

// Test if a second user can be added
describe("adding a second user", () => {
  it("should create a user with id 1", () => {
    const user = "Hamill";
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    };
    expect(addUser(user)).toEqual(action);
  });
});
