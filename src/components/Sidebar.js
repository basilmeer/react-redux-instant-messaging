import React from "react";
import PropTypes from "prop-types";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <Typography variant="overline">
      <p class="users-online-text">Users Online:</p>
    </Typography>
    <ul>
      {users.map(user => (
        <li key={user.id} className="online-user">
          <div className="online-user-avatar">
            <Avatar id="user-avatar">{user.name[0]}</Avatar>
          </div>
          <div className="online-user-name">
            <Typography variant="body1">{user.name}</Typography>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Sidebar;
