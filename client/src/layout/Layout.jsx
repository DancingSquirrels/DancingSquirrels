import React from 'react';
import { Link } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <div className="top-menu">
        <ul>
          <li>
            <Link to="/" onClick={this.props.getHomePage}>Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout" onClick={this.props.logoutUser}>Logout</Link>
          </li>
        </ul>
        <h1>Podiocast!</h1>
      </div>
    );
  }
}

export default Layout;
