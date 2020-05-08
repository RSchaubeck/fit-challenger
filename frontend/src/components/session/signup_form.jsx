import React from "react";
import { withRouter } from "react-router-dom";
import './signup.css';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      height: "",
      weight: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      height: this.state.height,
      weight: this.state.weight
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <div className="errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <p key={`error-${i}`} className="error">
            - {this.state.errors[error]}
          </p>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className="picture">
          <img src="https://fit-challenger.s3.amazonaws.com/running-signup-page-photo.jpg" alt="running"/>
        </div>
        <div className="signup-form-outer-layer"> 
          <div className="signup-form">
            <h1>Create Your Fit-Challenger Account</h1>
            <h2>create your free account to get started</h2>

            <form onSubmit={this.handleSubmit}>
              <input
                required={true}
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <input
                required={true}
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <input
                required={true}
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <input
                required={true}
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <input
                required={true}
                type="text"
                value={this.state.height}
                onChange={this.update("height")}
                placeholder="Height"
              />
              <input
                required={true}
                type="text"
                value={this.state.weight}
                onChange={this.update("weight")}
                placeholder="Weight"
              />
              <div className="signup-or-login">
                <button className="signup-button">Sign Up</button>
                <div className="login-option">
                  Already have an account?
                  <br/>
                  <Link to="/login" className="login-option-link">Log In</Link>
                </div>
              </div>
              {this.renderErrors()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
