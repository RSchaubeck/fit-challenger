import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import './login.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
      status: "notclickable"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Challenges page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/challenges");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) => {
      if (e.currentTarget.value !== "") {
        this.setState({
          status: "clickable"
        })
      } else {
        this.setState({
          status: "notclickable",
        });
      }
      this.setState({
        [field]: e.currentTarget.value,
      });
    }
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <div className="errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <p key={`error-${i}`} className="error">
            • {this.state.errors[error]}
          </p>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-logo">
          <img src="https://fit-challenger.s3.amazonaws.com/logo-box/logo_transparent.png" alt="logo"/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h1 className="login-prompt">LOG IN</h1>
          <div className="login-form">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input type="submit" value="Log in" className={this.state.status}/>
            <br/>
            <div className="signup-option">
              Don't have an account?
              <Link to={"/signup"} className="signup-link">Sign Up</Link>
            </div>

            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
