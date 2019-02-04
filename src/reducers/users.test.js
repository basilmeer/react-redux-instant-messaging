import users from "./users";
import * as types from "../constants/ActionTypes";

describe("Users reducer", () => {
  it("should return the initial state, empty", () => {
    expect(users(undefined, {})).toEqual([]);
  });
  it("should handle ADD_USER and store every user", () => {
    expect(
      users([], {
        type: types.ADD_USER,
        name: "Batman"
      })
    ).toEqual([
      {
        name: "Batman"
      }
    ]);
    expect(
      users(
        [
          {
            name: "Batman"
          }
        ],
        {
          type: types.ADD_USER,
          name: "Robin"
        }
      )
    ).toEqual([
      {
        name: "Batman"
      },
      {
        name: "Robin"
      }
    ]);
  });
});
