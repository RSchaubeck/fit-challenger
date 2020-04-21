import React from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-links">
          <Link to={"/challenges"} className="nav-link">
            All Challenges
          </Link>
          <Link to={"/profile"} className="nav-link">
            Profile
          </Link>
          <Link to={"/new_challenge"} className="nav-link">
            Create a Challenge
          </Link>
          <button onClick={this.logoutUser} className="logout-button">
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className="navbar-links">
          <Link to={"/signup"} className="nav-link">Signup</Link>
          <Link to={"/login"} className="nav-link">Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <h1>Fit-Challenger</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
