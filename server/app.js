const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8989 });

/**
 * For keeping track of how many users are in
 * @returns {Array} Contains objects corresponding to users
 */
const users = [];

// Set up a broadcast
const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== wss) {
      client.send(JSON.stringify(data));
    }
  });
};

// Set up a 'connection' event listener
wss.on("connection", ws => {
  // Keep a count for how many users are already in
  let index;
  // When a message is received
  ws.on("message", message => {
    // Parse the message
    const data = JSON.parse(message);
    // Handle different actions
    switch (data.type) {
      case "ADD_USER": {
        index = users.length;
        users.push({ name: data.name, id: index + 1 });
        ws.send(
          JSON.stringify({
            type: "USERS_LIST",
            users
          })
        );
        broadcast(
          {
            type: "USERS_LIST",
            users
          },
          ws
        );
        break;
      }
      case "ADD_MESSAGE":
        broadcast(
          {
            type: "ADD_MESSAGE",
            message: data.message,
            author: data.author
          },
          ws
        );
        break;
      default:
        break;
    }
  });

  // When the connection is closed, remove the user from the list and broadcast it
  ws.on("close", () => {
    users.splice(index, 1);
    broadcast(
      {
        type: "USERS_LIST",
        users
      },
      ws
    );
  });
});
