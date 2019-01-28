import React from 'react';
import PropTypes from 'prop-types';

// It'll get passed an object containing a message and the author's name
const Message = ({ message, author }) => (
  // Straight up returns a message
  <p>
    <i>{author}</i>: {message}
  </p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message;