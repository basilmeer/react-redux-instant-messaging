const messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
    case "MESSAGE_RECEIVED":
      // Return the state by concatenating the message and its details
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ]);
    default:
      return state;
  }
};

export default messages;
