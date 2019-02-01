import React from "react";
import PropTypes from "prop-types";

import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

// It'll get passed an object containing a message and the author's name
const Message = ({ message, author }) => (
  // Straight up returns a message
  <div className="message-display">
    <div className="message-avatar">
      <Avatar>{author[0]}</Avatar>
    </div>
    <div className="message-message">
      <Paper className="message-paper">
        <p>
          {/* <i>{author}</i>:  */}
          {message}
        </p>
      </Paper>
    </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Message;
