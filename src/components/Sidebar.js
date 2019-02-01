import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <p class="users-online-text">Users Online:</p>
    <ul>
      {users.map(user => (
        <li key={user.id} className="user-name">
          {user.name}
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
